CREATE TABLE empresas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  rnc VARCHAR(20) UNIQUE,
  sector VARCHAR(100),
  pais VARCHAR(80) DEFAULT 'República Dominicana',
  moneda VARCHAR(10) DEFAULT 'DOP',
  logo_url TEXT,
  color_primario VARCHAR(7) DEFAULT '#4ade80',
  activa BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);