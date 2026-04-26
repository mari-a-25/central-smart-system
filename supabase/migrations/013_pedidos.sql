CREATE TABLE pedidos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  cliente_id UUID REFERENCES clientes(id) ON DELETE SET NULL,
  numero VARCHAR(30) UNIQUE NOT NULL,
  estado VARCHAR(30) DEFAULT 'borrador' CHECK (
    estado IN ('borrador', 'procesado', 'en_ruta', 'entregado', 'cancelado')
  ),
  total NUMERIC(14, 2) NOT NULL DEFAULT 0,
  notas TEXT,
  fecha_entrega_esperada DATE,
  fecha_entregado TIMESTAMPTZ,
  creado_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE pedidos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "pedidos_misma_empresa" ON pedidos
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));