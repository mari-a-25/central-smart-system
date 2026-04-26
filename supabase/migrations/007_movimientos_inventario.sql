CREATE TABLE movimientos_inventario (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  producto_id UUID REFERENCES productos(id) ON DELETE CASCADE NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('entrada', 'salida', 'ajuste')),
  cantidad INTEGER NOT NULL CHECK (cantidad > 0),
  modulo_origen VARCHAR(30) NOT NULL CHECK (
    modulo_origen IN ('ventas', 'compras', 'produccion', 'ajuste_manual')
  ),
  referencia_id UUID,
  referencia_tipo VARCHAR(30),
  stock_antes INTEGER NOT NULL,
  stock_despues INTEGER NOT NULL,
  notas TEXT,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE movimientos_inventario ENABLE ROW LEVEL SECURITY;

CREATE POLICY "movimientos_misma_empresa" ON movimientos_inventario
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));

  