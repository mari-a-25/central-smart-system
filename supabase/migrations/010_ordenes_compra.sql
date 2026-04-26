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