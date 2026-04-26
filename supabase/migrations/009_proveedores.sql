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