CREATE TABLE movimientos_contables (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('ingreso', 'egreso')),
  concepto VARCHAR(255) NOT NULL,
  monto NUMERIC(14, 2) NOT NULL CHECK (monto > 0),
  modulo_origen VARCHAR(30) NOT NULL CHECK (
    modulo_origen IN ('ventas', 'compras', 'rrhh', 'ajuste_manual')
  ),
  referencia_id UUID,
  referencia_tipo VARCHAR(30),
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  creado_por UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE movimientos_contables ENABLE ROW LEVEL SECURITY;

CREATE POLICY "contabilidad_misma_empresa" ON movimientos_contables
  FOR ALL USING (empresa_id = (
    SELECT empresa_id FROM usuarios WHERE id = auth.uid()
  ));