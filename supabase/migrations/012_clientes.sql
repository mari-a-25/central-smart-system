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