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