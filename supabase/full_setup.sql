CREATE TABLE empresas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  rnc VARCHAR(20) UNIQUE,
  sector VARCHAR(100),
  pais VARCHAR(80) DEFAULT 'RepÃºblica Dominicana',
  moneda VARCHAR(10) DEFAULT 'DOP',
  logo_url TEXT,
  color_primario VARCHAR(7) DEFAULT '#4ade80',
  activa BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE usuarios (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rol VARCHAR(30) NOT NULL CHECK (rol IN ('admin', 'empleado', 'cliente', 'proveedor')),
  activo BOOLEAN DEFAULT TRUE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "usuarios_misma_empresa" ON usuarios
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE empleados (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  nombre VARCHAR(150) NOT NULL,
  cedula VARCHAR(20) UNIQUE,
  email VARCHAR(255),
  telefono VARCHAR(30),
  area VARCHAR(80) NOT NULL,
  cargo VARCHAR(100),
  salario_base NUMERIC(12, 2) NOT NULL DEFAULT 0,
  fecha_contrato DATE NOT NULL,
  estado VARCHAR(20) DEFAULT 'activo' CHECK (estado IN ('activo', 'inactivo', 'suspendido')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE empleados ENABLE ROW LEVEL SECURITY;

CREATE POLICY "empleados_misma_empresa" ON empleados
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE asistencia (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  empleado_id UUID REFERENCES empleados(id) ON DELETE CASCADE NOT NULL,
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  estado VARCHAR(20) NOT NULL CHECK (estado IN ('presente', 'ausente', 'tardanza', 'permiso', 'feriado')),
  hora_entrada TIME,
  hora_salida TIME,
  observacion TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(empleado_id, fecha)
);

ALTER TABLE asistencia ENABLE ROW LEVEL SECURITY;

CREATE POLICY "asistencia_misma_empresa" ON asistencia
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE categorias_producto (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE categorias_producto ENABLE ROW LEVEL SECURITY;

CREATE POLICY "categorias_misma_empresa" ON categorias_producto
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE productos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  categoria_id UUID REFERENCES categorias_producto(id) ON DELETE SET NULL,
  nombre VARCHAR(150) NOT NULL,
  descripcion TEXT,
  codigo VARCHAR(50),
  unidad VARCHAR(30) DEFAULT 'unidad',
  precio_venta NUMERIC(12, 2) NOT NULL DEFAULT 0,
  precio_costo NUMERIC(12, 2) NOT NULL DEFAULT 0,
  stock_actual INTEGER NOT NULL DEFAULT 0,
  stock_minimo INTEGER NOT NULL DEFAULT 10,
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(empresa_id, codigo)
);

ALTER TABLE productos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "productos_misma_empresa" ON productos
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE movimientos_inventario (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  producto_id UUID REFERENCES productos(id) ON DELETE CASCADE NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('entrada', 'salida', 'ajuste')),
  cantidad INTEGER NOT NULL CHECK (cantidad > 0),
  modulo_origen VARCHAR(30) NOT NULL CHECK (
    modulo_origen IN ('ventas', 'compras', 'produccion', 'ajuste_manual')
  ),
  referencia_id UUID,
  referencia_tipo VARCHAR(30),
  stock_antes INTEGER NOT NULL,
  stock_despues INTEGER NOT NULL,
  notas TEXT,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE movimientos_inventario ENABLE ROW LEVEL SECURITY;

CREATE POLICY "movimientos_misma_empresa" ON movimientos_inventario
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));

  
CREATE OR REPLACE FUNCTION actualizar_stock()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.tipo = 'entrada' THEN
    UPDATE productos
    SET stock_actual = stock_actual + NEW.cantidad,
        updated_at = NOW()
    WHERE id = NEW.producto_id;
  ELSIF NEW.tipo = 'salida' THEN
    UPDATE productos
    SET stock_actual = stock_actual - NEW.cantidad,
        updated_at = NOW()
    WHERE id = NEW.producto_id;
  ELSIF NEW.tipo = 'ajuste' THEN
    UPDATE productos
    SET stock_actual = NEW.stock_despues,
        updated_at = NOW()
    WHERE id = NEW.producto_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_stock
AFTER INSERT ON movimientos_inventario
FOR EACH ROW EXECUTE FUNCTION actualizar_stock();
CREATE TABLE proveedores (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  rnc VARCHAR(20),
  contacto_nombre VARCHAR(100),
  contacto_telefono VARCHAR(30),
  contacto_email VARCHAR(255),
  direccion TEXT,
  rating NUMERIC(3,1) DEFAULT 5.0 CHECK (rating >= 0 AND rating <= 5),
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE proveedores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "proveedores_misma_empresa" ON proveedores
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE ordenes_compra (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  proveedor_id UUID REFERENCES proveedores(id) ON DELETE SET NULL,
  numero VARCHAR(30) UNIQUE NOT NULL,
  estado VARCHAR(30) DEFAULT 'borrador' CHECK (
    estado IN ('borrador', 'aprobada', 'enviada', 'recibida', 'cancelada')
  ),
  total NUMERIC(14, 2) NOT NULL DEFAULT 0,
  notas TEXT,
  fecha_esperada DATE,
  fecha_recibida DATE,
  creado_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE ordenes_compra ENABLE ROW LEVEL SECURITY;

CREATE POLICY "ordenes_compra_misma_empresa" ON ordenes_compra
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE detalles_orden_compra (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  orden_id UUID REFERENCES ordenes_compra(id) ON DELETE CASCADE NOT NULL,
  producto_id UUID REFERENCES productos(id) ON DELETE SET NULL,
  cantidad INTEGER NOT NULL CHECK (cantidad > 0),
  precio_unitario NUMERIC(12, 2) NOT NULL DEFAULT 0,
  subtotal NUMERIC(14, 2) GENERATED ALWAYS AS (cantidad * precio_unitario) STORED
);

ALTER TABLE detalles_orden_compra ENABLE ROW LEVEL SECURITY;

CREATE POLICY "detalles_orden_misma_empresa" ON detalles_orden_compra
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE clientes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  rnc VARCHAR(20),
  tipo VARCHAR(30) DEFAULT 'minorista' CHECK (tipo IN ('mayorista', 'minorista', 'gobierno')),
  clasificacion VARCHAR(20) DEFAULT 'nuevo' CHECK (
    clasificacion IN ('vip', 'activo', 'inactivo', 'nuevo')
  ),
  contacto_nombre VARCHAR(100),
  contacto_telefono VARCHAR(30),
  contacto_email VARCHAR(255),
  direccion TEXT,
  total_compras NUMERIC(14, 2) DEFAULT 0,
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "clientes_misma_empresa" ON clientes
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE pedidos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  cliente_id UUID REFERENCES clientes(id) ON DELETE SET NULL,
  numero VARCHAR(30) UNIQUE NOT NULL,
  estado VARCHAR(30) DEFAULT 'borrador' CHECK (
    estado IN ('borrador', 'procesado', 'en_ruta', 'entregado', 'cancelado')
  ),
  total NUMERIC(14, 2) NOT NULL DEFAULT 0,
  notas TEXT,
  fecha_entrega_esperada DATE,
  fecha_entregado TIMESTAMPTZ,
  creado_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE pedidos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "pedidos_misma_empresa" ON pedidos
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE detalles_pedido (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  pedido_id UUID REFERENCES pedidos(id) ON DELETE CASCADE NOT NULL,
  producto_id UUID REFERENCES productos(id) ON DELETE SET NULL,
  cantidad INTEGER NOT NULL CHECK (cantidad > 0),
  precio_unitario NUMERIC(12, 2) NOT NULL DEFAULT 0,
  subtotal NUMERIC(14, 2) GENERATED ALWAYS AS (cantidad * precio_unitario) STORED
);

ALTER TABLE detalles_pedido ENABLE ROW LEVEL SECURITY;

CREATE POLICY "detalles_pedido_misma_empresa" ON detalles_pedido
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE facturas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  pedido_id UUID REFERENCES pedidos(id) ON DELETE SET NULL,
  numero VARCHAR(30) UNIQUE NOT NULL,
  estado_pago VARCHAR(20) DEFAULT 'pendiente' CHECK (
    estado_pago IN ('pendiente', 'pagada', 'vencida', 'anulada')
  ),
  total NUMERIC(14, 2) NOT NULL,
  fecha_vencimiento DATE,
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE facturas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "facturas_misma_empresa" ON facturas
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE lotes_produccion (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  producto_id UUID REFERENCES productos(id) ON DELETE SET NULL,
  numero VARCHAR(30) UNIQUE NOT NULL,
  cantidad_planificada INTEGER NOT NULL CHECK (cantidad_planificada > 0),
  cantidad_producida INTEGER DEFAULT 0,
  estado VARCHAR(20) DEFAULT 'planificado' CHECK (
    estado IN ('planificado', 'en_proceso', 'finalizado', 'rechazado')
  ),
  calidad VARCHAR(20) DEFAULT 'pendiente' CHECK (
    calidad IN ('pendiente', 'aprobado', 'rechazado')
  ),
  motivo_rechazo TEXT,
  fecha_inicio DATE,
  fecha_fin DATE,
  creado_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE lotes_produccion ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lotes_misma_empresa" ON lotes_produccion
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE conductores (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  empleado_id UUID REFERENCES empleados(id) ON DELETE CASCADE NOT NULL UNIQUE,
  numero_licencia VARCHAR(30),
  tipo_vehiculo VARCHAR(60),
  placa_vehiculo VARCHAR(20),
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE conductores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "conductores_misma_empresa" ON conductores
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE rutas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  conductor_id UUID REFERENCES conductores(id) ON DELETE SET NULL,
  nombre VARCHAR(60) NOT NULL,
  estado VARCHAR(20) DEFAULT 'planificada' CHECK (
    estado IN ('planificada', 'en_curso', 'completada', 'cancelada')
  ),
  total_paradas INTEGER DEFAULT 0,
  paradas_completadas INTEGER DEFAULT 0,
  eta TIMESTAMPTZ,
  eficiencia NUMERIC(5,2),
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE rutas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rutas_misma_empresa" ON rutas
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE paradas_ruta (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  ruta_id UUID REFERENCES rutas(id) ON DELETE CASCADE NOT NULL,
  pedido_id UUID REFERENCES pedidos(id) ON DELETE SET NULL,
  orden INTEGER NOT NULL,
  direccion TEXT NOT NULL,
  estado VARCHAR(20) DEFAULT 'pendiente' CHECK (
    estado IN ('pendiente', 'completada', 'fallida')
  ),
  hora_completada TIMESTAMPTZ,
  notas TEXT
);

ALTER TABLE paradas_ruta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "paradas_misma_empresa" ON paradas_ruta
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE movimientos_contables (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('ingreso', 'egreso')),
  concepto VARCHAR(255) NOT NULL,
  monto NUMERIC(14, 2) NOT NULL CHECK (monto > 0),
  modulo_origen VARCHAR(30) NOT NULL CHECK (
    modulo_origen IN ('ventas', 'compras', 'rrhh', 'ajuste_manual')
  ),
  referencia_id UUID,
  referencia_tipo VARCHAR(30),
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  creado_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE movimientos_contables ENABLE ROW LEVEL SECURITY;

CREATE POLICY "contabilidad_misma_empresa" ON movimientos_contables
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE tickets_clientes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  cliente_id UUID REFERENCES clientes(id) ON DELETE SET NULL,
  asunto VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  estado VARCHAR(20) DEFAULT 'abierto' CHECK (
    estado IN ('abierto', 'en_atencion', 'resuelto', 'cerrado')
  ),
  prioridad VARCHAR(20) DEFAULT 'media' CHECK (
    prioridad IN ('baja', 'media', 'alta', 'urgente')
  ),
  respuesta TEXT,
  atendido_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE tickets_clientes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "tickets_misma_empresa" ON tickets_clientes
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
CREATE TABLE alertas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('critica', 'advertencia', 'info', 'exito')),
  modulo_origen VARCHAR(30) NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  leida BOOLEAN DEFAULT FALSE,
  referencia_id UUID,
  referencia_tipo VARCHAR(30),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE alertas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "alertas_misma_empresa" ON alertas
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));
-- SEED DATA PARA CENTRAL SMART SYSTEM (NOVAOS)
-- Empresa: La Nueva Esperanza
-- Cantidad de registros: 30+ distribuidos en mÃºltiples tablas

-- 1. Limpieza de datos previos (opcional, comentar si no se desea)
-- DELETE FROM alertas;
-- DELETE FROM detalles_pedido;
-- DELETE FROM pedidos;
-- DELETE FROM movimientos_inventario;
-- DELETE FROM productos;
-- DELETE FROM categorias_producto;
-- DELETE FROM clientes;
-- DELETE FROM proveedores;
-- DELETE FROM usuarios;
-- DELETE FROM empresas;

-- 2. Crear Empresa (La Nueva Esperanza)
INSERT INTO empresas (id, nombre, rnc, sector, pais, color_primario)
VALUES ('e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'La Nueva Esperanza SRL', '131-12345-6', 'Alimentos y Bebidas', 'RepÃºblica Dominicana', '#0ea5e9');

-- 3. Crear Usuarios (Asumiendo que el admin ya existe en auth.users, pero creamos el perfil en la tabla usuarios)
-- Nota: En un entorno real, el ID debe coincidir con auth.users.id
-- AquÃ­ usamos IDs genÃ©ricos para el ejemplo de la tabla perfiles.
INSERT INTO usuarios (id, empresa_id, nombre, email, rol)
VALUES 
('u1u1u1u1-u1u1-u1u1-u1u1-u1u1u1u1u1u1', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Admin Nova', 'admin@lanuevaesperanza.com', 'admin'),
('u2u2u2u2-u2u2-u2u2-u2u2-u2u2u2u2u2u2', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Vendedor Uno', 'ventas@lanuevaesperanza.com', 'empleado');

-- 4. CategorÃ­as de Producto
INSERT INTO categorias_producto (id, empresa_id, nombre, descripcion)
VALUES 
('c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Jugos Naturales', 'Bebidas de frutas 100% naturales'),
('c2c2c2c2-c2c2-c2c2-c2c2-c2c2c2c2c2c2', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Snacks', 'Aperitivos horneados y fritos'),
('c3c3c3c3-c3c3-c3c3-c3c3-c3c3c3c3c3c3', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Materia Prima', 'Insumos para producciÃ³n'),
('c4c4c4c4-c4c4-c4c4-c4c4-c4c4c4c4c4c4', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Empaques', 'Botellas, etiquetas y cajas');

-- 5. Productos
INSERT INTO productos (id, empresa_id, categoria_id, nombre, codigo, precio_venta, precio_costo, stock_actual, stock_minimo)
VALUES 
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1', 'Jugo de Naranja 500ml', 'JN-001', 75.00, 45.00, 150, 50),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1', 'Jugo de PiÃ±a 500ml', 'JN-002', 75.00, 45.00, 12, 50), -- STOCK BAJO
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1', 'Jugo de Chinola 500ml', 'JN-003', 80.00, 48.00, 200, 50),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'c2c2c2c2-c2c2-c2c2-c2c2-c2c2c2c2c2c2', 'Platanitos con Sal', 'SN-001', 35.00, 18.00, 300, 100),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'c2c2c2c2-c2c2-c2c2-c2c2-c2c2c2c2c2c2', 'ChicharrÃ³n de Cerdo 50g', 'SN-002', 50.00, 30.00, 5, 40), -- STOCK CRÃTICO
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'c3c3c3c3-c3c3-c3c3-c3c3-c3c3c3c3c3c3', 'AzÃºcar Blanca 50lb', 'MP-001', 1200.00, 1000.00, 20, 5),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'c4c4c4c4-c4c4-c4c4-c4c4-c4c4c4c4c4c4', 'Botella PET 500ml', 'EM-001', 5.00, 3.50, 5000, 1000);

-- 6. Proveedores
INSERT INTO proveedores (id, empresa_id, nombre, contacto, telefono, email)
VALUES 
('p1p1p1p1-p1p1-p1p1-p1p1-p1p1p1p1p1p1', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Frutas del Valle', 'Juan PÃ©rez', '809-555-0101', 'ventas@frutasdelvalle.com'),
('p2p2p2p2-p2p2-p2p2-p2p2-p2p2p2p2p2p2', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Envases Dominicanos', 'Maria Rodriguez', '809-555-0102', 'info@envases.do');

-- 7. Clientes
INSERT INTO clientes (id, empresa_id, nombre, contacto, telefono, email, clasificacion)
VALUES 
('cl1cl1cl-cl1c-cl1c-cl1c-cl1cl1cl1cl1', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Supermercado Nacional', 'Gerente Compras', '809-555-0201', 'compras@nacional.do', 'VIP'),
('cl2cl2cl-cl2c-cl2c-cl2c-cl2cl2cl2cl2', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Colmado La Esquina', 'Pedro Martinez', '809-555-0202', 'colmado@gmail.com', 'activo'),
('cl3cl3cl-cl3c-cl3c-cl3c-cl3cl3cl3cl3', 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Cliente Final Juan', 'Juan Lopez', '809-555-0203', 'juan@gmail.com', 'nuevo');

-- 8. Pedidos (Ãšltimos 7 dÃ­as para grÃ¡ficas)
INSERT INTO pedidos (id, empresa_id, cliente_id, numero, estado, total, created_at)
VALUES 
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'cl1cl1cl-cl1c-cl1c-cl1c-cl1cl1cl1cl1', 'PED-1001', 'entregado', 15000.00, NOW() - INTERVAL '6 days'),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'cl2cl2cl-cl2c-cl2c-cl2c-cl2cl2cl2cl2', 'PED-1002', 'entregado', 2500.00, NOW() - INTERVAL '5 days'),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'cl1cl1cl-cl1c-cl1c-cl1c-cl1cl1cl1cl1', 'PED-1003', 'entregado', 18000.00, NOW() - INTERVAL '4 days'),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'cl3cl3cl-cl3c-cl3c-cl3c-cl3cl3cl3cl3', 'PED-1004', 'entregado', 850.00, NOW() - INTERVAL '3 days'),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'cl2cl2cl-cl2c-cl2c-cl2c-cl2cl2cl2cl2', 'PED-1005', 'en_ruta', 3200.00, NOW() - INTERVAL '2 days'),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'cl1cl1cl-cl1c-cl1c-cl1c-cl1cl1cl1cl1', 'PED-1006', 'procesado', 12000.00, NOW() - INTERVAL '1 day'),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'cl2cl2cl-cl2c-cl2c-cl2c-cl2cl2cl2cl2', 'PED-1007', 'borrador', 4500.00, NOW());

-- 9. Alertas
INSERT INTO alertas (empresa_id, tipo, modulo_origen, titulo, mensaje)
VALUES 
('e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'critica', 'inventario', 'Stock CrÃ­tico: ChicharrÃ³n', 'Quedan solo 5 unidades de ChicharrÃ³n de Cerdo 50g.'),
('e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'advertencia', 'inventario', 'Stock Bajo: Jugo de PiÃ±a', 'El inventario de Jugo de PiÃ±a 500ml estÃ¡ por debajo del mÃ­nimo (12/50).'),
('e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'exito', 'logistica', 'Ruta Completada', 'El conductor Carlos Perez ha finalizado la ruta R-102 exitosamente.'),
('e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'info', 'ventas', 'Nuevo Cliente VIP', 'Supermercado Nacional ha sido categorizado como VIP por su volumen de compras.');

-- 10. Empleados
INSERT INTO empleados (id, empresa_id, nombre, puesto, departamento, salario)
VALUES 
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Carlos Perez', 'Conductor', 'LogÃ­stica', 25000.00),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Ana Martinez', 'Contadora', 'AdministraciÃ³n', 45000.00),
(gen_random_uuid(), 'e1e1e1e1-e1e1-e1e1-e1e1-e1e1e1e1e1e1', 'Jose Luis', 'Operario', 'ProducciÃ³n', 22000.00);
