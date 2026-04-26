CREATE TABLE paradas_ruta (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  ruta_id UUID REFERENCES rutas(id) ON DELETE CASCADE NOT NULL,
  pedido_id UUID REFERENCES pedidos(id) ON DELETE SET NULL,
  orden INTEGER NOT NULL,
  direccion TEXT NOT NULL,
  estado VARCHAR(20) DEFAULT 'pendiente' CHECK (
    estado IN ('pendiente', 'completada', 'fallida')
  ),
  hora_completada TIMESTAMPTZ,
  notas TEXT
);

ALTER TABLE paradas_ruta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "paradas_misma_empresa" ON paradas_ruta
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));