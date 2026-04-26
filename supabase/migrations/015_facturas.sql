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