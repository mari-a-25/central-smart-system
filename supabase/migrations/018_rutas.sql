CREATE TABLE rutas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  conductor_id UUID REFERENCES conductores(id) ON DELETE SET NULL,
  nombre VARCHAR(60) NOT NULL,
  estado VARCHAR(20) DEFAULT 'planificada' CHECK (
    estado IN ('planificada', 'en_curso', 'completada', 'cancelada')
  ),
  total_paradas INTEGER DEFAULT 0,
  paradas_completadas INTEGER DEFAULT 0,
  eta TIMESTAMPTZ,
  eficiencia NUMERIC(5,2),
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE rutas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rutas_misma_empresa" ON rutas
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));