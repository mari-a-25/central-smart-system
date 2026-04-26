CREATE TABLE lotes_produccion (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  producto_id UUID REFERENCES productos(id) ON DELETE SET NULL,
  numero VARCHAR(30) UNIQUE NOT NULL,
  cantidad_planificada INTEGER NOT NULL CHECK (cantidad_planificada > 0),
  cantidad_producida INTEGER DEFAULT 0,
  estado VARCHAR(20) DEFAULT 'planificado' CHECK (
    estado IN ('planificado', 'en_proceso', 'finalizado', 'rechazado')
  ),
  calidad VARCHAR(20) DEFAULT 'pendiente' CHECK (
    calidad IN ('pendiente', 'aprobado', 'rechazado')
  ),
  motivo_rechazo TEXT,
  fecha_inicio DATE,
  fecha_fin DATE,
  creado_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE lotes_produccion ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lotes_misma_empresa" ON lotes_produccion
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));