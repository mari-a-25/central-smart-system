import fs from 'fs';
import crypto from 'crypto';

const uuid = () => crypto.randomUUID();

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomEl = (arr) => arr[randomInt(0, arr.length - 1)];

const empresasCount = 2;
const usuariosPerEmpresa = 5;
const categoriasPerEmpresa = 6;
const productosPerEmpresa = 20;
const clientesPerEmpresa = 15;
const proveedoresPerEmpresa = 5;
const pedidosPerEmpresa = 30;
const ordenesPerEmpresa = 10;
const rutasPerEmpresa = 5;

const sql = [];

// Helper for strings
const esc = (str) => {
  if (str === null || str === undefined) return 'NULL';
  return "'" + str.replace(/'/g, "''") + "'";
};

// 1. Empresas
const empresas = [];
for (let i = 0; i < empresasCount; i++) {
  empresas.push({
    id: uuid(),
    nombre: `Empresa ${i + 1} S.A.`,
    rnc: `101${randomInt(100000, 999999)}`,
    sector: randomEl(['Tecnología', 'Manufactura', 'Servicios', 'Retail']),
  });
}
sql.push('-- EMPRESAS');
empresas.forEach(e => {
  sql.push(`INSERT INTO public.empresas (id, nombre, rnc, sector, activa) VALUES ('${e.id}', ${esc(e.nombre)}, ${esc(e.rnc)}, ${esc(e.sector)}, true);`);
});

// 2. Usuarios & Auth Users
const usuarios = [];
sql.push('-- AUTH USERS & USUARIOS');
empresas.forEach(empresa => {
  const roles = ['admin', 'empleado', 'empleado', 'empleado', 'cliente'];
  roles.forEach((rol, idx) => {
    const userId = uuid();
    const email = `usuario${idx+1}_${empresa.nombre.replace(/ /g, '')}@test.com`.toLowerCase();
    const nombre = `Usuario ${rol} ${idx+1}`;
    
    // Auth user (Assuming Supabase structure, we might need a basic insert or skip it if it's too complex. 
    // It's safer to just insert the necessary fields for auth.users to satisfy FK constraints if needed, but the user structure has CONSTRAINT usuarios_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id).
    // Let's insert mock auth.users
    sql.push(`INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token) VALUES ('00000000-0000-0000-0000-000000000000', '${userId}', 'authenticated', 'authenticated', ${esc(email)}, crypt('password123', gen_salt('bf')), now(), '{"provider": "email", "providers": ["email"]}', '{"name": "${nombre}"}', now(), now(), '', '', '', '');`);
    
    // Usuario
    sql.push(`INSERT INTO public.usuarios (id, empresa_id, nombre, email, rol, activo) VALUES ('${userId}', '${empresa.id}', ${esc(nombre)}, ${esc(email)}, ${esc(rol)}, true);`);
    
    usuarios.push({ id: userId, empresa_id: empresa.id, nombre, rol });
  });
});

// 3. Empleados
const empleados = [];
sql.push('-- EMPLEADOS');
empresas.forEach(empresa => {
  const empUsuarios = usuarios.filter(u => u.empresa_id === empresa.id && u.rol !== 'cliente');
  empUsuarios.forEach((u, idx) => {
    const empId = uuid();
    sql.push(`INSERT INTO public.empleados (id, empresa_id, usuario_id, nombre, cedula, email, telefono, area, cargo, salario_base, fecha_contrato, estado) VALUES ('${empId}', '${empresa.id}', '${u.id}', ${esc(u.nombre)}, '001-${randomInt(1000000, 9999999)}-${randomInt(0,9)}', ${esc('emp'+idx+'@test.com')}, '809-555-${randomInt(1000,9999)}', ${esc(randomEl(['Ventas', 'Operaciones', 'IT', 'RRHH']))}, ${esc(u.rol === 'admin' ? 'Gerente' : 'Especialista')}, ${randomInt(20000, 150000)}, CURRENT_DATE - integer '${randomInt(10, 1000)}', 'activo');`);
    empleados.push({ id: empId, empresa_id: empresa.id, usuario_id: u.id });
  });
});

// 4. Conductores
const conductores = [];
sql.push('-- CONDUCTORES');
empresas.forEach(empresa => {
  // Let's pick 2 empleados to be conductores
  const empList = empleados.filter(e => e.empresa_id === empresa.id).slice(0, 2);
  empList.forEach(emp => {
    const condId = uuid();
    sql.push(`INSERT INTO public.conductores (id, empresa_id, empleado_id, numero_licencia, tipo_vehiculo, placa_vehiculo, activo) VALUES ('${condId}', '${empresa.id}', '${emp.id}', 'LIC-${randomInt(10000,99999)}', ${esc(randomEl(['Camión', 'Furgoneta', 'Motocicleta']))}, 'L${randomInt(100000,999999)}', true);`);
    conductores.push({ id: condId, empresa_id: empresa.id });
  });
});

// 5. Categorías
const categorias = [];
sql.push('-- CATEGORIAS');
empresas.forEach(empresa => {
  const catNames = ['Electrónica', 'Hogar', 'Alimentos', 'Bebidas', 'Ropa', 'Herramientas', 'Servicios', 'Otros'];
  for(let i=0; i<categoriasPerEmpresa; i++) {
    const catId = uuid();
    sql.push(`INSERT INTO public.categorias_producto (id, empresa_id, nombre, descripcion) VALUES ('${catId}', '${empresa.id}', ${esc(catNames[i])}, 'Descripción de ${catNames[i]}');`);
    categorias.push({ id: catId, empresa_id: empresa.id });
  }
});

// 6. Productos
const productos = [];
sql.push('-- PRODUCTOS');
empresas.forEach(empresa => {
  const empCats = categorias.filter(c => c.empresa_id === empresa.id);
  for(let i=0; i<productosPerEmpresa; i++) {
    const prodId = uuid();
    const cat = randomEl(empCats);
    const cost = randomInt(50, 1000);
    const price = cost * (1 + randomInt(20, 50)/100);
    const stock = randomInt(0, 500);
    sql.push(`INSERT INTO public.productos (id, empresa_id, categoria_id, nombre, descripcion, codigo, precio_costo, precio_venta, stock_actual, stock_minimo) VALUES ('${prodId}', '${empresa.id}', '${cat.id}', 'Producto ${i+1}', 'Descripción del producto ${i+1}', 'PRD-${randomInt(1000,9999)}', ${cost}, ${price}, ${stock}, 10);`);
    productos.push({ id: prodId, empresa_id: empresa.id, precio: price });
  }
});

// 7. Clientes
const clientes = [];
sql.push('-- CLIENTES');
empresas.forEach(empresa => {
  for(let i=0; i<clientesPerEmpresa; i++) {
    const cliId = uuid();
    sql.push(`INSERT INTO public.clientes (id, empresa_id, nombre, rnc, tipo, clasificacion, contacto_telefono) VALUES ('${cliId}', '${empresa.id}', 'Cliente ${i+1}', '402-${randomInt(1000000,9999999)}-${randomInt(0,9)}', ${esc(randomEl(['minorista', 'mayorista', 'gobierno']))}, ${esc(randomEl(['nuevo', 'activo', 'vip']))}, '829-555-${randomInt(1000,9999)}');`);
    clientes.push({ id: cliId, empresa_id: empresa.id });
  }
});

// 8. Proveedores
const proveedores = [];
sql.push('-- PROVEEDORES');
empresas.forEach(empresa => {
  for(let i=0; i<proveedoresPerEmpresa; i++) {
    const provId = uuid();
    sql.push(`INSERT INTO public.proveedores (id, empresa_id, nombre, rnc, rating) VALUES ('${provId}', '${empresa.id}', 'Proveedor ${i+1}', '130-${randomInt(100000,999999)}-${randomInt(0,9)}', ${randomInt(3,5)});`);
    proveedores.push({ id: provId, empresa_id: empresa.id });
  }
});

// 9. Pedidos & Detalles
const pedidos = [];
sql.push('-- PEDIDOS Y DETALLES');
empresas.forEach(empresa => {
  const empCli = clientes.filter(c => c.empresa_id === empresa.id);
  const empProd = productos.filter(p => p.empresa_id === empresa.id);
  const empUsu = usuarios.filter(u => u.empresa_id === empresa.id);
  
  for(let i=0; i<pedidosPerEmpresa; i++) {
    const pedId = uuid();
    const cli = randomEl(empCli);
    const usu = randomEl(empUsu);
    const estado = randomEl(['borrador', 'procesado', 'en_ruta', 'entregado', 'cancelado']);
    
    // Detalles
    const numDetalles = randomInt(1, 5);
    let total = 0;
    const detallesQueries = [];
    
    for(let j=0; j<numDetalles; j++) {
      const prod = randomEl(empProd);
      const cant = randomInt(1, 20);
      const subtotal = cant * prod.precio;
      total += subtotal;
      detallesQueries.push(`INSERT INTO public.detalles_pedido (id, empresa_id, pedido_id, producto_id, cantidad, precio_unitario) VALUES ('${uuid()}', '${empresa.id}', '${pedId}', '${prod.id}', ${cant}, ${prod.precio});`);
    }
    
    sql.push(`INSERT INTO public.pedidos (id, empresa_id, cliente_id, numero, estado, total, creado_por) VALUES ('${pedId}', '${empresa.id}', '${cli.id}', 'PED-${randomInt(10000,99999)}', '${estado}', ${total}, '${usu.id}');`);
    sql.push(...detallesQueries);
    pedidos.push({ id: pedId, empresa_id: empresa.id, total, estado, cliente_id: cli.id });
  }
});

// 10. Facturas
sql.push('-- FACTURAS');
pedidos.forEach(ped => {
  if (ped.estado === 'entregado' || ped.estado === 'procesado') {
    const estado_pago = randomEl(['pendiente', 'pagada']);
    sql.push(`INSERT INTO public.facturas (id, empresa_id, pedido_id, numero, estado_pago, total, fecha_vencimiento) VALUES ('${uuid()}', '${ped.empresa_id}', '${ped.id}', 'FAC-${randomInt(10000,99999)}', '${estado_pago}', ${ped.total}, CURRENT_DATE + integer '${randomInt(0, 30)}');`);
  }
});

// 11. Ordenes Compra & Detalles
sql.push('-- ORDENES COMPRA Y DETALLES');
empresas.forEach(empresa => {
  const empProv = proveedores.filter(p => p.empresa_id === empresa.id);
  const empProd = productos.filter(p => p.empresa_id === empresa.id);
  const empUsu = usuarios.filter(u => u.empresa_id === empresa.id);
  
  for(let i=0; i<ordenesPerEmpresa; i++) {
    const ordId = uuid();
    const prov = randomEl(empProv);
    const usu = randomEl(empUsu);
    const estado = randomEl(['borrador', 'aprobada', 'recibida']);
    
    const numDetalles = randomInt(1, 4);
    let total = 0;
    const detallesQueries = [];
    
    for(let j=0; j<numDetalles; j++) {
      const prod = randomEl(empProd);
      const cant = randomInt(10, 100);
      const precio = prod.precio * 0.7; // Costo aprox
      const subtotal = cant * precio;
      total += subtotal;
      detallesQueries.push(`INSERT INTO public.detalles_orden_compra (id, empresa_id, orden_id, producto_id, cantidad, precio_unitario) VALUES ('${uuid()}', '${empresa.id}', '${ordId}', '${prod.id}', ${cant}, ${precio});`);
    }
    
    sql.push(`INSERT INTO public.ordenes_compra (id, empresa_id, proveedor_id, numero, estado, total, creado_por) VALUES ('${ordId}', '${empresa.id}', '${prov.id}', 'OC-${randomInt(10000,99999)}', '${estado}', ${total}, '${usu.id}');`);
    sql.push(...detallesQueries);
  }
});

// 12. Asistencia
sql.push('-- ASISTENCIA');
empresas.forEach(empresa => {
  const empEmpleados = empleados.filter(e => e.empresa_id === empresa.id);
  empEmpleados.forEach(emp => {
    for(let i=0; i<10; i++) { // 10 dias
      const estado = randomEl(['presente', 'presente', 'presente', 'ausente', 'tardanza']);
      sql.push(`INSERT INTO public.asistencia (id, empresa_id, empleado_id, fecha, estado, hora_entrada, hora_salida) VALUES ('${uuid()}', '${empresa.id}', '${emp.id}', CURRENT_DATE - integer '${i}', '${estado}', '08:00:00', '17:00:00');`);
    }
  });
});

// 13. Alertas
sql.push('-- ALERTAS');
empresas.forEach(empresa => {
  for(let i=0; i<15; i++) {
    const tipo = randomEl(['critica', 'advertencia', 'info', 'exito']);
    sql.push(`INSERT INTO public.alertas (id, empresa_id, tipo, modulo_origen, titulo, mensaje, leida) VALUES ('${uuid()}', '${empresa.id}', '${tipo}', ${esc(randomEl(['ventas', 'inventario', 'rrhh']))}, 'Alerta ${i}', 'Detalle de la alerta generada automáticamente.', ${randomEl([true, false])});`);
  }
});

// 14. Tickets
sql.push('-- TICKETS');
empresas.forEach(empresa => {
  const empCli = clientes.filter(c => c.empresa_id === empresa.id);
  const empUsu = usuarios.filter(u => u.empresa_id === empresa.id);
  for(let i=0; i<10; i++) {
    const cli = randomEl(empCli);
    const usu = randomEl(empUsu);
    const estado = randomEl(['abierto', 'en_atencion', 'resuelto', 'cerrado']);
    sql.push(`INSERT INTO public.tickets_clientes (id, empresa_id, cliente_id, asunto, descripcion, estado, prioridad, atendido_por) VALUES ('${uuid()}', '${empresa.id}', '${cli.id}', 'Problema ${i}', 'Descripción del ticket de soporte', '${estado}', ${esc(randomEl(['baja', 'media', 'alta', 'urgente']))}, '${usu.id}');`);
  }
});

// Write to file
const fileContent = sql.join('\n');
fs.writeFileSync('C:/Users/maria/Documents/central-smart-system/supabase/seed_massive.sql', fileContent);
console.log('SQL File generated at supabase/seed_massive.sql');
