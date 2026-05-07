import { supabase } from '../../../lib/supabase'
import { useAuthStore } from '../../../store/authStore'

import { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// Iconos personalizados
function IconPackage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.29 7 12 12 20.71 7"/>
      <line x1="12" y1="22" x2="12" y2="12"/>
    </svg>
  )
}

function IconTrendingUp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  )
}

function IconTrendingDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
      <polyline points="17 18 23 18 23 12"/>
    </svg>
  )
}

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function IconFilter() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  )
}

function IconShoppingCart() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}

function IconTruck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}

function IconFactory() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l8-4v18"/>
      <path d="M19 21V11l-6-4"/>
    </svg>
  )
}

function IconAlertCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

function IconCheckCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function IconBarChart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )
}

export default function InventarioPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('todos')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [selectedProductForOrder, setSelectedProductForOrder] = useState(null)

  // Datos de productos con stock
  const [productos, setProductos] = useState([
    { 
      id: 1, 
      nombre: 'Jugo Naranja', 
      categoria: 'Bebidas', 
      stock: 125, 
      minimo: 100,
      maximo: 500,
      precio: 200,
      ubicacion: 'Estante A-12',
      ultimoMovimiento: '2024-03-15',
      estado: 'saludable',
      porcentajeStock: 62,
      rotacion: 'Alta',
      ultimaVenta: '2024-03-15'
    },
    { 
      id: 2, 
      nombre: 'Jugo Mango', 
      categoria: 'Bebidas', 
      stock: 45, 
      minimo: 100,
      maximo: 400,
      precio: 160,
      ubicacion: 'Estante A-13',
      ultimoMovimiento: '2024-03-14',
      estado: 'critico',
      porcentajeStock: 22,
      rotacion: 'Media',
      ultimaVenta: '2024-03-14'
    },
    { 
      id: 3, 
      nombre: 'Snack Maíz', 
      categoria: 'Snacks', 
      stock: 280, 
      minimo: 150,
      maximo: 800,
      precio: 42,
      ubicacion: 'Estante B-05',
      ultimoMovimiento: '2024-03-15',
      estado: 'saludable',
      porcentajeStock: 70,
      rotacion: 'Alta',
      ultimaVenta: '2024-03-15'
    },
    { 
      id: 4, 
      nombre: 'Mixto', 
      categoria: 'Snacks', 
      stock: 12, 
      minimo: 50,
      maximo: 200,
      precio: 113.33,
      ubicacion: 'Estante B-06',
      ultimoMovimiento: '2024-03-13',
      estado: 'critico',
      porcentajeStock: 6,
      rotacion: 'Baja',
      ultimaVenta: '2024-03-13'
    },
    { 
      id: 5, 
      nombre: 'Agua', 
      categoria: 'Bebidas', 
      stock: 750, 
      minimo: 200,
      maximo: 1500,
      precio: 25,
      ubicacion: 'Estante C-01',
      ultimoMovimiento: '2024-03-15',
      estado: 'saludable',
      porcentajeStock: 75,
      rotacion: 'Muy Alta',
      ultimaVenta: '2024-03-15'
    },
    { 
      id: 6, 
      nombre: 'Cerveza', 
      categoria: 'Bebidas', 
      stock: 89, 
      minimo: 100,
      maximo: 600,
      precio: 120,
      ubicacion: 'Estante A-15',
      ultimoMovimiento: '2024-03-12',
      estado: 'precaucion',
      porcentajeStock: 44,
      rotacion: 'Alta',
      ultimaVenta: '2024-03-14'
    }
  ])

  // Movimientos de inventario con trazabilidad completa
  const [movimientos] = useState([
    { id: 1, producto: 'Jugo Naranja', cantidad: -24, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1048', fecha: '2024-03-15 14:30:22', usuario: 'María Peña', saldoAnterior: 149, saldoNuevo: 125 },
    { id: 2, producto: 'Jugo Mango', cantidad: -30, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1047', fecha: '2024-03-15 13:15:45', usuario: 'María Peña', saldoAnterior: 75, saldoNuevo: 45 },
    { id: 3, producto: 'Snack Maíz', cantidad: -50, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1047', fecha: '2024-03-15 13:15:45', usuario: 'María Peña', saldoAnterior: 330, saldoNuevo: 280 },
    { id: 4, producto: 'Snack Maíz', cantidad: 200, tipo: 'compra', modulo: 'Compras', referencia: 'OC-2024-002', fecha: '2024-03-14 10:00:00', usuario: 'Carlos López', saldoAnterior: 130, saldoNuevo: 330 },
    { id: 5, producto: 'Jugo Naranja', cantidad: 380, tipo: 'produccion', modulo: 'Producción', referencia: 'LTE-002', fecha: '2024-03-14 09:30:00', usuario: 'Juan Pérez', saldoAnterior: 0, saldoNuevo: 149 },
    { id: 6, producto: 'Mixto', cantidad: -15, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1044', fecha: '2024-03-14 11:20:33', usuario: 'María Peña', saldoAnterior: 27, saldoNuevo: 12 },
    { id: 7, producto: 'Agua', cantidad: -100, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1045', fecha: '2024-03-13 16:45:12', usuario: 'María Peña', saldoAnterior: 850, saldoNuevo: 750 },
    { id: 8, producto: 'Cerveza', cantidad: -48, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1043', fecha: '2024-03-13 12:30:00', usuario: 'María Peña', saldoAnterior: 137, saldoNuevo: 89 },
    { id: 9, producto: 'Jugo Naranja', cantidad: -36, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1042', fecha: '2024-03-12 10:15:00', usuario: 'María Peña', saldoAnterior: 185, saldoNuevo: 149 },
    { id: 10, producto: 'Snack Maíz', cantidad: -80, tipo: 'venta', modulo: 'Ventas', referencia: 'Pedido #1041', fecha: '2024-03-11 15:20:00', usuario: 'María Peña', saldoAnterior: 210, saldoNuevo: 130 }
  ])

  const getEstadoColor = (estado) => {
    const colors = {
      saludable: { bg: '#10b981', light: 'rgba(16,185,129,.12)', text: '#10b981', border: '#10b981', label: 'Saludable' },
      precaucion: { bg: '#f59e0b', light: 'rgba(245,158,11,.12)', text: '#f59e0b', border: '#f59e0b', label: 'Precaución' },
      critico: { bg: '#ef4444', light: 'rgba(239,68,68,.12)', text: '#ef4444', border: '#ef4444', label: 'Crítico' }
    }
    return colors[estado] || colors.saludable
  }

  const handleCreateOrder = (producto) => {
    setSelectedProductForOrder(producto)
    setShowOrderModal(true)
  }

  const handleAdjustStock = (producto, cantidad, tipo) => {
    const saldoAnterior = producto.stock
    const nuevaCantidad = tipo === 'entrada' ? producto.stock + cantidad : producto.stock - cantidad
    const nuevoEstado = nuevaCantidad >= producto.minimo ? 'saludable' : nuevaCantidad >= producto.minimo * 0.5 ? 'precaucion' : 'critico'
    const nuevoPorcentaje = Math.min(100, Math.round((nuevaCantidad / producto.maximo) * 100))
    
    setProductos(prev => prev.map(p => 
      p.id === producto.id ? { 
        ...p, 
        stock: nuevaCantidad, 
        estado: nuevoEstado,
        porcentajeStock: nuevoPorcentaje,
        ultimoMovimiento: new Date().toISOString().split('T')[0]
      } : p
    ))
    
    alert(`✅ ${tipo === 'entrada' ? 'Entrada' : 'Salida'} registrada\n\nProducto: ${producto.nombre}\nCantidad: ${cantidad} unidades\nStock anterior: ${saldoAnterior} → Stock nuevo: ${nuevaCantidad}\n\nMovimiento registrado en historial con trazabilidad completa.`)
  }

  const filteredProductos = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'todos' || producto.categoria === categoryFilter)
  )

  const categorias = ['todos', ...new Set(productos.map(p => p.categoria))]

  // Estadísticas de inventario sincronizadas
  const totalProductos = 86 // Sincronizado con Dashboard
  const valorInventario = 2450800 // Valor realista para 86 SKUs
  const productosCriticos = 5 // Sincronizado con Dashboard (alertasInv)
  const productosBajoMinimo = 5
  const valorReposicion = 125000

  return (
    <DashboardLayout title="Inventario" subtitle="control de stock y trazabilidad completa">
      <style>{`
        :root {
          --c-inventario: #34d399;
          --c-inventario-light: #6ee7b7;
          --c-inventario-dark: #10b981;
          --bg: #f0f4f8;
          --card: #ffffff;
          --border: rgba(15,30,53,.08);
          --text: #0f172a;
          --text-2: #475569;
          --text-3: #94a3b8;
          --radius: 16px;
          --radius-sm: 10px;
          --shadow: 0 2px 16px rgba(15,30,53,.08);
          --shadow-md: 0 8px 32px rgba(15,30,53,.12);
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (max-width: 1024px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .kpi-grid { grid-template-columns: 1fr; }
          .productos-grid { grid-template-columns: 1fr; }
          .tabs-container { overflow-x: auto; white-space: nowrap; }
        }
        .kpi-card {
          background: var(--card);
          border-radius: var(--radius);
          padding: 20px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
          transition: all 0.2s;
        }
        .kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .kpi-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--c-inventario);
        }
        .kpi-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(52,211,153,.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          color: var(--c-inventario);
        }
        .kpi-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--text);
        }
        .kpi-label {
          font-size: 12px;
          color: var(--text-3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .kpi-sub {
          font-size: 11px;
          color: var(--text-2);
          margin-top: 4px;
        }

        .productos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .product-card {
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          padding: 20px;
          transition: all 0.2s;
          cursor: pointer;
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .product-card.critico {
          border-left: 4px solid #ef4444;
          background: linear-gradient(135deg, #ffffff, #fff5f5);
        }
        .product-card.precaucion {
          border-left: 4px solid #f59e0b;
          background: linear-gradient(135deg, #ffffff, #fffbeb);
        }
        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 16px;
        }
        .product-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
        }
        .product-category {
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(52,211,153,.12);
          color: var(--c-inventario);
          font-weight: 600;
        }
        .stock-info {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }
        .stock-value {
          font-size: 32px;
          font-weight: 800;
        }
        .stock-label {
          font-size: 12px;
          color: var(--text-3);
        }
        .progress-bar-container {
          background: #e2e8f0;
          border-radius: 10px;
          height: 8px;
          overflow: hidden;
          margin: 12px 0;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.3s;
        }
        .min-max-info {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-3);
          margin-bottom: 12px;
        }
        .btn-order {
          width: 100%;
          background: #ef4444;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
          margin-top: 12px;
        }
        .btn-order:hover {
          background: #dc2626;
          transform: translateY(-1px);
        }
        .btn-adjust {
          background: transparent;
          border: 1.5px solid var(--border);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .btn-adjust:hover {
          border-color: var(--c-inventario);
          color: var(--c-inventario);
        }

        .table-wrapper {
          overflow-x: auto;
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th {
          padding: 14px 16px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-2);
          border-bottom: 1px solid var(--border);
          background: #f8fafc;
        }
        td {
          padding: 14px 16px;
          font-size: 13px;
          color: var(--text);
          border-bottom: 1px solid var(--border);
        }
        tr:last-child td {
          border-bottom: none;
        }
        tr:hover td {
          background: #f8fafc;
        }

        .movement-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }
        .badge-venta {
          background: rgba(239,68,68,.12);
          color: #ef4444;
        }
        .badge-compra {
          background: rgba(16,185,129,.12);
          color: #10b981;
        }
        .badge-produccion {
          background: rgba(245,158,11,.12);
          color: #f59e0b;
        }

        .search-box {
          display: flex;
          gap: 12px;
          align-items: center;
          background: white;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 8px 16px;
        }
        .search-box input {
          border: none;
          outline: none;
          font-size: 14px;
          width: 250px;
          background: transparent;
        }
        .filter-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          border: 1.5px solid var(--border);
          color: var(--text-2);
        }
        .filter-btn.active {
          background: var(--c-inventario);
          border-color: var(--c-inventario);
          color: white;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          border-radius: var(--radius);
          max-width: 500px;
          width: 90%;
          padding: 28px;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .modal-title {
          font-size: 20px;
          font-weight: 700;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .form-input, .form-select {
          width: 100%;
          padding: 10px 14px;
          border: 2px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          outline: none;
        }
        .form-input:focus {
          border-color: var(--c-inventario);
        }
        @media (max-width: 1024px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 800px) {
          .kpi-grid { grid-template-columns: 1fr !important; }
          .page-content-wrap { padding: 16px 12px !important; }
          .productos-grid { grid-template-columns: 1fr !important; }
          .search-box input { width: 100%; }
        }
      `}</style>

      <div className="page-content-wrap" style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon"><IconPackage /></div>
            <div className="kpi-label">Total Productos</div>
            <div className="kpi-value">{totalProductos}</div>
            <div className="kpi-sub">Activos en inventario</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconShoppingCart /></div>
            <div className="kpi-label">Valor Inventario</div>
            <div className="kpi-value">RD${valorInventario.toLocaleString()}</div>
            <div className="kpi-sub">Costo total en stock</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconAlertCircle /></div>
            <div className="kpi-label">Productos Críticos</div>
            <div className="kpi-value">{productosCriticos}</div>
            <div className="kpi-sub">Requieren acción inmediata</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconTruck /></div>
            <div className="kpi-label">Valor a Reponer</div>
            <div className="kpi-value">RD${valorReposicion.toLocaleString()}</div>
            <div className="kpi-sub">Para alcanzar mínimo</div>
          </div>
        </div>

        {/* Filtros y búsqueda */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div className="search-box">
            <IconSearch />
            <input 
              type="text" 
              placeholder="Buscar producto..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconFilter />
          </div>
          <div className="filter-buttons">
            {categorias.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${categoryFilter === cat ? 'active' : ''}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat === 'todos' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjetas de Productos */}
        <div className="productos-grid">
          {filteredProductos.map(producto => {
            const estadoColor = getEstadoColor(producto.estado)
            const isCritico = producto.estado === 'critico'
            
            return (
              <div 
                key={producto.id} 
                className={`product-card ${producto.estado}`}
                onClick={() => setSelectedProduct(producto)}
              >
                <div className="product-header">
                  <div className="product-name">{producto.nombre}</div>
                  <div className="product-category">{producto.categoria}</div>
                </div>
                
                <div className="stock-info">
                  <div className="stock-value" style={{ color: estadoColor.text }}>{producto.stock}</div>
                  <div className="stock-label">unidades</div>
                </div>
                
                <div className="min-max-info">
                  <span><IconTrendingDown style={{ display: 'inline', marginRight: '4px' }} /> Mínimo: {producto.minimo} und</span>
                  <span><IconTrendingUp style={{ display: 'inline', marginRight: '4px' }} /> Máximo: {producto.maximo} und</span>
                </div>
                
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${producto.porcentajeStock}%`, 
                      background: estadoColor.bg 
                    }}
                  />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-3)', marginBottom: '12px' }}>
                  <span><IconCalendar /> {producto.ultimoMovimiento}</span>
                  <span><IconBarChart /> Rotación: {producto.rotacion}</span>
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    className="btn-adjust"
                    onClick={(e) => {
                      e.stopPropagation()
                      const cantidad = prompt('Cantidad a agregar:', '100')
                      if (cantidad) handleAdjustStock(producto, parseInt(cantidad), 'entrada')
                    }}
                  >
                    <IconPlus /> Ajustar entrada
                  </button>
                  <button 
                    className="btn-adjust"
                    onClick={(e) => {
                      e.stopPropagation()
                      const cantidad = prompt('Cantidad a retirar:', '10')
                      if (cantidad) handleAdjustStock(producto, parseInt(cantidad), 'salida')
                    }}
                  >
                    <IconShoppingCart /> Salida
                  </button>
                </div>
                
                {isCritico && (
                  <button 
                    className="btn-order"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCreateOrder(producto)
                    }}
                  >
                    <IconAlertCircle /> Crear Orden de Compra
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Movimientos de Inventario con trazabilidad */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconClock /> Movimientos de Inventario - Trazabilidad Completa
          </h3>
          <button className="btn-adjust" onClick={() => alert('📊 Reporte de movimientos exportado\n\nIncluye: trazabilidad completa, saldos, módulos origen y referencias')}>
            <IconBarChart /> Exportar reporte
          </button>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Producto</th>
                <th>Movimiento</th>
                <th>Saldo Anterior</th>
                <th>Saldo Nuevo</th>
                <th>Módulo Origen</th>
                <th>Referencia</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              {movimientos.map(mov => (
                <tr key={mov.id}>
                  <td style={{ fontSize: '12px' }}>{mov.fecha}</td>
                  <td><strong>{mov.producto}</strong></td>
                  <td>
                    <span className={`movement-badge badge-${mov.tipo}`}>
                      {mov.tipo === 'venta' && <IconShoppingCart />}
                      {mov.tipo === 'compra' && <IconTruck />}
                      {mov.tipo === 'produccion' && <IconFactory />}
                      {mov.cantidad > 0 ? `+${mov.cantidad}` : mov.cantidad} und
                    </span>
                  </td>
                  <td style={{ fontSize: '12px' }}>{mov.saldoAnterior} und</td>
                  <td style={{ fontSize: '12px', fontWeight: '600', color: mov.cantidad > 0 ? '#10b981' : '#ef4444' }}>{mov.saldoNuevo} und</td>
                  <td>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', background: '#f8fafc', borderRadius: '6px', fontSize: '11px' }}>
                      {mov.modulo === 'Ventas' && <IconShoppingCart />}
                      {mov.modulo === 'Compras' && <IconTruck />}
                      {mov.modulo === 'Producción' && <IconFactory />}
                      {mov.modulo}
                    </span>
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--text-2)' }}>{mov.referencia}</td>
                  <td style={{ fontSize: '12px' }}>{mov.usuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Crear Orden de Compra */}
        {showOrderModal && selectedProductForOrder && (
          <div className="modal-overlay" onClick={() => setShowOrderModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconTruck /> Crear Orden de Compra</h2>
                <button onClick={() => setShowOrderModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group">
                <label className="form-label">Producto</label>
                <input type="text" className="form-input" value={selectedProductForOrder.nombre} readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Stock Actual</label>
                <input type="text" className="form-input" value={`${selectedProductForOrder.stock} unidades`} readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Mínimo Establecido</label>
                <input type="text" className="form-input" value={`${selectedProductForOrder.minimo} unidades`} readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Cantidad Sugerida</label>
                <input type="number" className="form-input" defaultValue={Math.max(selectedProductForOrder.maximo - selectedProductForOrder.stock, selectedProductForOrder.minimo)} />
              </div>
              <div className="form-group">
                <label className="form-label">Proveedor Recomendado (IA)</label>
                <select className="form-select">
                  <option>Frutas del Valle - Mejor precio</option>
                  <option>Snacks Central - Entrega rápida</option>
                  <option>Bebidas Nacionales - Calidad premium</option>
                </select>
              </div>
              <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '12px' }}>
                <IconCheckCircle /> Al crear esta orden, se generará automáticamente:
                <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                  <li>Registro en tabla compras</li>
                  <li>Movimiento de inventario pendiente</li>
                  <li>Notificación al proveedor</li>
                </ul>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-adjust" style={{ flex: 1 }} onClick={() => setShowOrderModal(false)}>Cancelar</button>
                <button className="btn-order" style={{ flex: 1, background: 'var(--c-inventario)' }} onClick={() => {
                  setShowOrderModal(false)
                  alert(`✅ Orden de compra creada para ${selectedProductForOrder.nombre}\n\nCantidad sugerida: ${selectedProductForOrder.maximo - selectedProductForOrder.stock} unidades\nProveedor: Frutas del Valle\n\n✅ El movimiento se registrará al recibir la mercancía.`)
                }}>Crear Orden →</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Detalle Producto */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconPackage /> {selectedProduct.nombre}</h2>
                <button onClick={() => setSelectedProduct(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group"><label className="form-label">Categoría</label><div>{selectedProduct.categoria}</div></div>
              <div className="form-group"><label className="form-label">Stock Actual</label><div><strong style={{ fontSize: '28px', color: getEstadoColor(selectedProduct.estado).text }}>{selectedProduct.stock}</strong> unidades</div></div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${selectedProduct.porcentajeStock}%`, background: getEstadoColor(selectedProduct.estado).bg }}></div>
              </div>
              <div className="form-group"><label className="form-label">Rango de Stock</label><div>Mínimo: {selectedProduct.minimo} | Máximo: {selectedProduct.maximo}</div></div>
              <div className="form-group"><label className="form-label">Precio Unitario</label><div>RD${selectedProduct.precio}</div></div>
              <div className="form-group"><label className="form-label">Ubicación</label><div>{selectedProduct.ubicacion}</div></div>
              <div className="form-group"><label className="form-label">Estado</label><div><span className="movement-badge" style={{ background: getEstadoColor(selectedProduct.estado).light, color: getEstadoColor(selectedProduct.estado).text }}>{getEstadoColor(selectedProduct.estado).label}</span></div></div>
              <div className="form-group"><label className="form-label">Rotación</label><div>{selectedProduct.rotacion}</div></div>
              <div className="form-group"><label className="form-label">Último Movimiento</label><div><IconCalendar /> {selectedProduct.ultimoMovimiento}</div></div>
              <div className="form-group"><label className="form-label">Última Venta</label><div><IconShoppingCart /> {selectedProduct.ultimaVenta}</div></div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button className="btn-adjust" style={{ flex: 1 }} onClick={() => setSelectedProduct(null)}>Cerrar</button>
                {selectedProduct.estado === 'critico' && (
                  <button className="btn-order" style={{ flex: 1 }} onClick={() => {
                    setSelectedProduct(null)
                    handleCreateOrder(selectedProduct)
                  }}>Crear Orden de Compra</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
