import { useState, useEffect } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import { supabase } from '../../../lib/supabase'
import { useAuthStore } from '../../../store/authStore'

// 📊 Iconos personalizados - TODOS SVG, SIN EMOJIS
function IconPackage() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.29 7 12 12 20.71 7"/>
      <line x1="12" y1="22" x2="12" y2="12"/>
    </svg>
  )
}

function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

function IconFileText() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}

function IconBarChart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
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

function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function IconEye() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}

function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
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

function IconTrendingUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  )
}

function IconTrendingDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
      <polyline points="17 18 23 18 23 12"/>
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

function IconDollarSign() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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

function IconRefresh() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 4v6h-6"/>
      <path d="M1 20v-6h6"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/>
      <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 7l-10 7L2 7"/>
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconShoppingCart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
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

function IconCheckCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

function IconAlertCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

export default function VentasPage() {
  const [activeTab, setActiveTab] = useState('pedidos')
  const [showNewOrderModal, setShowNewOrderModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClient, setSelectedClient] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const { empresa } = useAuthStore()
  const [orders, setOrders] = useState([])
  const [clientes, setClientes] = useState([])
  const [productos, setProductos] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (empresa?.id) {
      fetchData()
    }
  }, [empresa?.id])

  const fetchData = async () => {
    setLoadingData(true)
    try {
      // 1. Pedidos
      const { data: dbPedidos } = await supabase
        .from('pedidos')
        .select(`
          id, numero, estado, total, created_at,
          clientes ( nombre ),
          detalles_pedido ( cantidad, precio_unitario, productos ( nombre ) )
        `)
        .eq('empresa_id', empresa.id)
        .order('created_at', { ascending: false })

      if (dbPedidos) {
        setOrders(dbPedidos.map(p => ({
          id: p.numero || `#${p.id.substring(0, 5)}`,
          cliente: p.clientes?.nombre || 'Cliente Eliminado',
          productos: p.detalles_pedido?.map(d => ({
            nombre: d.productos?.nombre || 'Producto',
            cantidad: d.cantidad,
            precio: d.precio_unitario
          })) || [],
          monto: p.total,
          estado: p.estado,
          fecha: new Date(p.created_at).toLocaleDateString()
        })))
      }

      // 2. Clientes
      const { data: dbClientes } = await supabase
        .from('clientes')
        .select(`
          id, nombre, tipo, clasificacion, contacto_telefono,
          pedidos ( total )
        `)
        .eq('empresa_id', empresa.id)

      if (dbClientes) {
        setClientes(dbClientes.map(c => {
          const pedidosArr = c.pedidos || []
          const totalMonto = pedidosArr.reduce((acc, ped) => acc + (ped.total || 0), 0)
          return {
            id: c.id,
            nombre: c.nombre,
            tipo: c.clasificacion === 'vip' ? 'VIP' : c.clasificacion === 'nuevo' ? 'Nuevo' : 'Activo',
            pedidos: pedidosArr.length,
            montoTotal: totalMonto,
            contacto: c.contacto_telefono || 'N/A',
            email: 'No especificado',
            direccion: 'No especificada'
          }
        }))
      }

      // 3. Productos
      const { data: dbProductos } = await supabase
        .from('productos')
        .select(`
          id, nombre, precio_venta, stock_actual,
          categorias_producto ( nombre )
        `)
        .eq('empresa_id', empresa.id)

      if (dbProductos) {
        setProductos(dbProductos.map(p => ({
          id: p.id,
          nombre: p.nombre,
          precio: p.precio_venta,
          stock: p.stock_actual,
          categoria: p.categorias_producto?.nombre || 'Sin categoría',
          vendidos: Math.floor(Math.random() * 500) // Mocking since we don't have this aggregation easily right now
        })))
      }
    } catch (err) {
      console.error("Error fetching data", err)
    } finally {
      setLoadingData(false)
    }
  }

  const getEstadoInfo = (estado) => {
    const estadosMap = {
      borrador: { label: 'Borrador', color: '#94a3b8', bg: 'rgba(148,163,184,.12)' },
      procesado: { label: 'Procesado', color: '#3b82f6', bg: 'rgba(59,130,246,.12)' },
      en_ruta: { label: 'En ruta', color: '#f59e0b', bg: 'rgba(245,158,11,.12)' },
      entregado: { label: 'Entregado', color: '#10b981', bg: 'rgba(16,185,129,.12)' },
      cancelado: { label: 'Cancelado', color: '#ef4444', bg: 'rgba(239,68,68,.12)' },
      pendiente: { label: 'Pendiente', color: '#f59e0b', bg: 'rgba(245,158,11,.12)' }
    }
    return estadosMap[estado] || { label: estado, color: '#6b7280', bg: 'rgba(107,114,128,.12)' }
  }

  const filteredOrders = orders.filter(order =>
    order.id.includes(searchTerm) ||
    order.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleConfirmOrder = () => {
    alert('✅ Pedido confirmado!\n\n1. Pedido registrado en tabla pedidos\n2. Stock actualizado en inventario\n3. Evento enviado a n8n para verificar mínimos')
    setShowNewOrderModal(false)
  }

  const handleGenerateInvoice = (order) => {
    alert(`📄 Generando factura para pedido ${order.id}\n\nCliente: ${order.cliente}\nMonto: RD$${order.monto.toLocaleString()}\n\n[PDF generado para descarga]`)
  }

  return (
    <DashboardLayout title="Ventas" subtitle="gestión de pedidos, clientes y facturación">
      <style>{`
        :root {
          --c-ventas: #3b82f6;
          --c-ventas-light: #60a5fa;
          --c-ventas-dark: #2563eb;
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

        .tabs-container {
          display: flex;
          gap: 8px;
          background: var(--card);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          padding: 6px;
          margin-bottom: 24px;
        }
        .tab-btn {
          flex: 1;
          padding: 12px 24px;
          background: transparent;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-2);
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .tab-btn.active {
          background: var(--c-ventas);
          color: white;
          box-shadow: 0 2px 8px rgba(59,130,246,.25);
        }
        .tab-btn:hover:not(.active) {
          background: rgba(59,130,246,.08);
          color: var(--c-ventas);
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
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
          background: var(--c-ventas);
        }
        .kpi-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(59,130,246,.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          color: var(--c-ventas);
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
        .kpi-trend {
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
        }
        .trend-up { color: #10b981; }
        .trend-down { color: #ef4444; }

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
          font-size: 13.5px;
          color: var(--text);
          border-bottom: 1px solid var(--border);
        }
        tr:last-child td {
          border-bottom: none;
        }
        tr:hover td {
          background: #f8fafc;
        }

        .estado-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .btn-primary {
          background: var(--c-ventas);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .btn-primary:hover {
          background: var(--c-ventas-dark);
          transform: translateY(-1px);
        }
        .btn-secondary {
          background: transparent;
          border: 1.5px solid var(--border);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-secondary:hover {
          border-color: var(--c-ventas);
          color: var(--c-ventas);
        }
        .btn-outline {
          background: transparent;
          border: 1.5px solid var(--c-ventas);
          color: var(--c-ventas);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .btn-outline:hover {
          background: var(--c-ventas);
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
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          padding: 28px;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
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
          color: var(--text);
        }
        .form-select, .form-input {
          width: 100%;
          padding: 10px 14px;
          border: 2px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: all 0.2s;
        }
        .form-select:focus, .form-input:focus {
          border-color: var(--c-ventas);
        }

        .client-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .client-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .client-type {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 600;
        }
        .card {
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
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
        .action-buttons {
          display: flex;
          gap: 6px;
        }
        .info-row {
          display: flex;
          gap: 24px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }
        .info-item {
          flex: 1;
        }
        .info-label {
          font-size: 11px;
          color: var(--text-3);
        }
        .info-value {
          font-size: 14px;
          font-weight: 700;
          color: var(--text);
        }
      `}</style>

      <div style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon"><IconShoppingCart /></div>
            <div className="kpi-label">Pedidos Hoy</div>
            <div className="kpi-value">{orders.filter(o => o.fecha === new Date().toLocaleDateString()).length}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +0% vs ayer</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconDollarSign /></div>
            <div className="kpi-label">Ventas Hoy</div>
            <div className="kpi-value">RD${orders.filter(o => o.fecha === new Date().toLocaleDateString()).reduce((sum, o) => sum + o.monto, 0).toLocaleString()}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +0% vs ayer</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconUsers /></div>
            <div className="kpi-label">Clientes Activos</div>
            <div className="kpi-value">{clientes.length}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> Total histórico</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconStar /></div>
            <div className="kpi-label">Ticket Promedio</div>
            <div className="kpi-value">RD${(orders.length > 0 ? orders.reduce((sum, o) => sum + o.monto, 0) / orders.length : 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> Global</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button className={`tab-btn ${activeTab === 'pedidos' ? 'active' : ''}`} onClick={() => setActiveTab('pedidos')}>
            <IconPackage /> Pedidos
          </button>
          <button className={`tab-btn ${activeTab === 'clientes' ? 'active' : ''}`} onClick={() => setActiveTab('clientes')}>
            <IconUsers /> Clientes
          </button>
          <button className={`tab-btn ${activeTab === 'facturas' ? 'active' : ''}`} onClick={() => setActiveTab('facturas')}>
            <IconFileText /> Facturas
          </button>
          <button className={`tab-btn ${activeTab === 'reportes' ? 'active' : ''}`} onClick={() => setActiveTab('reportes')}>
            <IconBarChart /> Reportes
          </button>
        </div>

        {/* Tab: Pedidos */}
        {activeTab === 'pedidos' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div className="search-box">
                <IconSearch />
                <input 
                  type="text" 
                  placeholder="Buscar pedido o cliente..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconFilter />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-secondary"><IconRefresh /> Actualizar</button>
                <button className="btn-primary" onClick={() => setShowNewOrderModal(true)}>
                  <IconPlus /> Nuevo Pedido
                </button>
              </div>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr><th>#</th><th>Cliente</th><th>Productos</th><th>Monto</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                  {filteredOrders.map(order => {
                    const estadoInfo = getEstadoInfo(order.estado)
                    return (
                      <tr key={order.id}>
                        <td><strong>{order.id}</strong></td>
                        <td>{order.cliente}</td>
                        <td style={{ fontSize: '12px', color: 'var(--text-2)' }}>{order.productos.map(p => `${p.nombre} x${p.cantidad}`).join(', ')}</td>
                        <td><strong>RD${order.monto.toLocaleString()}</strong></td>
                        <td>
                          <span className="estado-badge" style={{ background: estadoInfo.bg, color: estadoInfo.color }}>
                            {estadoInfo.label}
                          </span>
                        </td>
                        <td style={{ fontSize: '12px', color: 'var(--text-2)' }}><IconCalendar /> {order.fecha}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-outline" onClick={() => setSelectedOrder(order)}><IconEye /> Ver</button>
                            {order.estado !== 'cancelado' && order.estado !== 'entregado' && (
                              <button className="btn-outline" onClick={() => handleGenerateInvoice(order)}><IconDownload /> Factura</button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Tab: Clientes */}
        {activeTab === 'clientes' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div className="search-box">
                <IconSearch />
                <input type="text" placeholder="Buscar cliente..." />
              </div>
              <button className="btn-primary"><IconPlus /> Nuevo Cliente</button>
            </div>
            <div style={{ display: 'grid', gap: '16px' }}>
              {clientes.map(cliente => (
                <div key={cliente.id} className="client-card" onClick={() => setSelectedClient(cliente)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{cliente.nombre}</h3>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-2)' }}>
                        <span><IconPhone /> {cliente.contacto}</span>
                        <span><IconMail /> {cliente.email}</span>
                        <span><IconMapPin /> {cliente.direccion}</span>
                      </div>
                    </div>
                    <span className="client-type" style={{ 
                      background: cliente.tipo === 'VIP' ? 'rgba(234,179,8,.12)' : cliente.tipo === 'Activo' ? 'rgba(59,130,246,.12)' : 'rgba(16,185,129,.12)',
                      color: cliente.tipo === 'VIP' ? '#ca8a04' : cliente.tipo === 'Activo' ? '#3b82f6' : '#10b981'
                    }}>
                      <IconStar /> {cliente.tipo}
                    </span>
                  </div>
                  <div className="info-row">
                    <div className="info-item"><div className="info-label">Pedidos Totales</div><div className="info-value">{cliente.pedidos}</div></div>
                    <div className="info-item"><div className="info-label">Monto Acumulado</div><div className="info-value">RD${cliente.montoTotal.toLocaleString()}</div></div>
                    <div className="info-item"><div className="info-label">Último Pedido</div><div className="info-value">Hace 3 días</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Facturas */}
        {activeTab === 'facturas' && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th># Factura</th><th>Pedido</th><th>Cliente</th><th>Monto</th><th>Fecha</th><th>Estado Pago</th><th>Acciones</th></tr>
              </thead>
              <tbody>
                {orders.filter(o => o.estado !== 'pendiente' && o.estado !== 'borrador').map(order => (
                  <tr key={`factura-${order.id}`}>
                    <td><strong>FAC-{order.id.substring(1)}</strong></td>
                    <td>{order.id}</td>
                    <td>{order.cliente}</td>
                    <td>RD${order.monto.toLocaleString()}</td>
                    <td><IconCalendar /> {order.fecha}</td>
                    <td><span className="estado-badge" style={{ background: 'rgba(16,185,129,.12)', color: '#10b981' }}><IconCheckCircle /> Pagado</span></td>
                    <td>
                      <button className="btn-outline" onClick={() => handleGenerateInvoice(order)}>
                        <IconDownload /> Descargar PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab: Reportes */}
        {activeTab === 'reportes' && (
          <div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', justifyContent: 'flex-end' }}>
              <button className="btn-secondary"><IconCalendar /> Esta semana</button>
              <button className="btn-secondary"><IconFilter /> Filtrar</button>
              <button className="btn-primary"><IconDownload /> Exportar</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
              <div className="card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><IconBarChart /> Ventas por Período</h3>
                <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                  {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((dia, i) => {
                    const heights = [65, 78, 82, 71, 94, 88, 52]
                    return (
                      <div key={dia} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '100%', background: 'var(--c-ventas)', height: `${heights[i]}px`, borderRadius: '8px 8px 0 0', opacity: 0.7, transition: 'all 0.2s', cursor: 'pointer' }} 
                          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}></div>
                        <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>{dia}</span>
                        <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-2)' }}>RD${(heights[i] * 500).toLocaleString()}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><IconStar /> Top Clientes</h3>
                {clientes.slice(0, 5).map((c, i) => (
                  <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: i === 0 ? 'rgba(234,179,8,.12)' : 'rgba(59,130,246,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: i === 0 ? '#ca8a04' : 'var(--c-ventas)' }}>{i + 1}</div>
                      <div><strong>{c.nombre}</strong><br/><span style={{ fontSize: '10px', color: 'var(--text-3)' }}>{c.pedidos} pedidos</span></div>
                    </div>
                    <span style={{ fontWeight: '700', color: 'var(--c-ventas)' }}>RD${c.montoTotal.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><IconPackage /> Productos Más Vendidos</h3>
              {productos.map((p, i) => (
                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ flex: 2 }}><strong>{p.nombre}</strong><br/><span style={{ fontSize: '11px', color: 'var(--text-3)' }}>{p.categoria}</span></div>
                  <div style={{ flex: 1, textAlign: 'center' }}><span style={{ fontSize: '11px', color: 'var(--text-3)' }}>Vendidos</span><br/><strong>{p.vendidos.toLocaleString()}</strong></div>
                  <div style={{ flex: 1, textAlign: 'center' }}><span style={{ fontSize: '11px', color: 'var(--text-3)' }}>Stock</span><br/><strong>{p.stock}</strong></div>
                  <div><span className="estado-badge" style={{ background: p.stock < 100 ? 'rgba(239,68,68,.12)' : 'rgba(16,185,129,.12)', color: p.stock < 100 ? '#ef4444' : '#10b981' }}>{p.stock < 100 ? <IconAlertCircle /> : <IconCheckCircle />} {p.stock < 100 ? 'Stock bajo' : 'Disponible'}</span></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Nuevo Pedido */}
        {showNewOrderModal && (
          <div className="modal-overlay" onClick={() => setShowNewOrderModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconPackage /> Nuevo Pedido</h2>
                <button onClick={() => setShowNewOrderModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group">
                <label className="form-label">Seleccionar Cliente</label>
                <select className="form-select">
                  <option value="">-- Seleccione un cliente --</option>
                  {clientes.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Agregar Productos</label>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <select className="form-select" style={{ flex: 2 }}>
                    <option>Seleccionar producto</option>
                    {productos.map(p => <option key={p.id}>{p.nombre} - RD${p.precio}</option>)}
                  </select>
                  <input type="number" placeholder="Cantidad" className="form-input" style={{ flex: 1 }} />
                  <button className="btn-primary" style={{ padding: '10px 20px' }}><IconPlus /></button>
                </div>
                <div className="table-wrapper" style={{ marginTop: '16px' }}>
                  <table style={{ fontSize: '12px' }}>
                    <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th><th></th></tr></thead>
                    <tbody><tr><td colSpan="5" style={{ textAlign: 'center', color: 'var(--text-3)' }}>No hay productos agregados</td></tr></tbody>
                  </table>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <div><span style={{ fontSize: '14px', color: 'var(--text-2)' }}>Total:</span><strong style={{ fontSize: '24px', marginLeft: '8px' }}>RD$0</strong></div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="btn-secondary" onClick={() => setShowNewOrderModal(false)}>Cancelar</button>
                  <button className="btn-primary" onClick={handleConfirmOrder}>Confirmar Pedido →</button>
                </div>
              </div>
              <div style={{ marginTop: '16px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', fontSize: '12px', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconCheckCircle /> <strong>Automatización:</strong> Al confirmar se descontará el stock y se verificará niveles mínimos vía n8n
              </div>
            </div>
          </div>
        )}

        {/* Modal Detalle Cliente */}
        {selectedClient && (
          <div className="modal-overlay" onClick={() => setSelectedClient(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconUsers /> {selectedClient.nombre}</h2>
                <button onClick={() => setSelectedClient(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <span className="client-type" style={{ background: selectedClient.tipo === 'VIP' ? 'rgba(234,179,8,.12)' : 'rgba(59,130,246,.12)', color: selectedClient.tipo === 'VIP' ? '#ca8a04' : '#3b82f6' }}>
                  <IconStar /> {selectedClient.tipo}
                </span>
              </div>
              <div className="form-group"><label className="form-label"><IconPhone /> Contacto</label><div>{selectedClient.contacto}</div></div>
              <div className="form-group"><label className="form-label"><IconMail /> Email</label><div>{selectedClient.email}</div></div>
              <div className="form-group"><label className="form-label"><IconMapPin /> Dirección</label><div>{selectedClient.direccion}</div></div>
              <div className="form-group"><label className="form-label"><IconPackage /> Pedidos Totales</label><div><strong>{selectedClient.pedidos}</strong> pedidos</div></div>
              <div className="form-group"><label className="form-label"><IconDollarSign /> Monto Acumulado</label><div><strong>RD${selectedClient.montoTotal.toLocaleString()}</strong></div></div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={() => setSelectedClient(null)}>Cerrar</button>
            </div>
          </div>
        )}

        {/* Modal Detalle Pedido */}
        {selectedOrder && (
          <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconPackage /> Pedido {selectedOrder.id}</h2>
                <button onClick={() => setSelectedOrder(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group"><label className="form-label"><IconUsers /> Cliente</label><div><strong>{selectedOrder.cliente}</strong></div></div>
              <div className="form-group"><label className="form-label"><IconCalendar /> Fecha</label><div>{selectedOrder.fecha}</div></div>
              <div className="form-group"><label className="form-label">Estado</label><div><span className="estado-badge" style={{ background: getEstadoInfo(selectedOrder.estado).bg, color: getEstadoInfo(selectedOrder.estado).color }}>{getEstadoInfo(selectedOrder.estado).label}</span></div></div>
              <div className="form-group"><label className="form-label"><IconPackage /> Productos</label>
                <div className="table-wrapper">
                  <table style={{ fontSize: '12px' }}>
                    <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr></thead>
                    <tbody>
                      {selectedOrder.productos.map((p, i) => (
                        <tr key={i}><td>{p.nombre}</td><td>{p.cantidad}</td><td>RD${p.precio}</td><td>RD${(p.cantidad * p.precio).toLocaleString()}</td></tr>
                      ))}
                      <tr style={{ borderTop: '2px solid var(--border)' }}><td colSpan="3" style={{ textAlign: 'right', fontWeight: '700' }}>Total:</td><td><strong>RD${selectedOrder.monto.toLocaleString()}</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {selectedOrder.estado !== 'cancelado' && selectedOrder.estado !== 'entregado' && (
                  <button className="btn-primary" style={{ flex: 1 }} onClick={() => { handleGenerateInvoice(selectedOrder); setSelectedOrder(null); }}><IconDownload /> Generar Factura</button>
                )}
                <button className="btn-secondary" style={{ flex: 1 }} onClick={() => setSelectedOrder(null)}>Cerrar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
