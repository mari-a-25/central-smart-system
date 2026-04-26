CREATE TABLE asistencia (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  empleado_id UUID REFERENCES empleados(id) ON DELETE CASCADE NOT NULL,
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  estado VARCHAR(20) NOT NULL CHECK (estado IN ('presente', 'ausente', 'tardanza', 'permiso', 'feriado')),
  hora_entrada TIME,
  hora_salida TIME,
  observacion TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(empleado_id, fecha)
);

ALTER TABLE asistencia ENABLE ROW LEVEL SECURITY;

CREATE POLICY "asistencia_misma_empresa" ON asistencia
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));