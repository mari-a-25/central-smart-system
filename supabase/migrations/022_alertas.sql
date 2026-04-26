CREATE TABLE alertas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('critica', 'advertencia', 'info', 'exito')),
  modulo_origen VARCHAR(30) NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  leida BOOLEAN DEFAULT FALSE,
  referencia_id UUID,
  referencia_tipo VARCHAR(30),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE alertas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "alertas_misma_empresa" ON alertas
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));