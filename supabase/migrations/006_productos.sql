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