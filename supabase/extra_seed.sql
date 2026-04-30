-- Generar Movimientos de Inventario (Entradas iniciales)
INSERT INTO public.movimientos_inventario (id, empresa_id, producto_id, tipo, cantidad, modulo_origen, referencia_tipo, notas, stock_antes, stock_despues)
SELECT uuid_generate_v4(), p.empresa_id, p.id, 'entrada', p.stock_actual, 'inventario', 'ajuste', 'Ajuste inicial de inventario', 0, p.stock_actual
FROM public.productos p;

-- Generar Lotes de Producción
INSERT INTO public.lotes_produccion (id, empresa_id, producto_id, numero, cantidad_planificada, cantidad_producida, estado, fecha_inicio, fecha_fin)
SELECT uuid_generate_v4(), p.empresa_id, p.id, 'LOTE-' || floor(random() * 9000 + 1000)::text, 500, 500, 'terminado', now() - interval '5 days', now() - interval '4 days'
FROM public.productos p
LIMIT 10;
