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