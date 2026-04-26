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