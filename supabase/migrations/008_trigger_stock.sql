CREATE OR REPLACE FUNCTION actualizar_stock()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.tipo = 'entrada' THEN
    UPDATE productos
    SET stock_actual = stock_actual + NEW.cantidad,
        updated_at = NOW()
    WHERE id = NEW.producto_id;
  ELSIF NEW.tipo = 'salida' THEN
    UPDATE productos
    SET stock_actual = stock_actual - NEW.cantidad,
        updated_at = NOW()
    WHERE id = NEW.producto_id;
  ELSIF NEW.tipo = 'ajuste' THEN
    UPDATE productos
    SET stock_actual = NEW.stock_despues,
        updated_at = NOW()
    WHERE id = NEW.producto_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_stock
AFTER INSERT ON movimientos_inventario
FOR EACH ROW EXECUTE FUNCTION actualizar_stock();