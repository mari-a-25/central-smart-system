CREATE TABLE tickets_clientes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  cliente_id UUID REFERENCES clientes(id) ON DELETE SET NULL,
  asunto VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  estado VARCHAR(20) DEFAULT 'abierto' CHECK (
    estado IN ('abierto', 'en_atencion', 'resuelto', 'cerrado')
  ),
  prioridad VARCHAR(20) DEFAULT 'media' CHECK (
    prioridad IN ('baja', 'media', 'alta', 'urgente')
  ),
  respuesta TEXT,
  atendido_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE tickets_clientes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "tickets_misma_empresa" ON tickets_clientes
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));