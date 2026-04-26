CREATE TABLE conductores (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  empleado_id UUID REFERENCES empleados(id) ON DELETE CASCADE NOT NULL UNIQUE,
  numero_licencia VARCHAR(30),
  tipo_vehiculo VARCHAR(60),
  placa_vehiculo VARCHAR(20),
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE conductores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "conductores_misma_empresa" ON conductores
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));