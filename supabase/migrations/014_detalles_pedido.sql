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