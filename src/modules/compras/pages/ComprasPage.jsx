import { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// Iconos personalizados
function IconTruck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}

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

function IconShoppingCart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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

function IconEdit() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3l4 4-7 7H10v-4L17 3z"/>
      <path d="M4 20h16"/>
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

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
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

function IconSend() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
}

function IconArchive() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8v13H3V8"/>
      <path d="M1 3h22v5H1z"/>
      <line x1="10" y1="12" x2="14" y2="12"/>
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

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function ComprasPage() {
  const [activeTab, setActiveTab] = useState('proveedores')
  const [showNewOrderModal, setShowNewOrderModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

  // Datos de proveedores
  const [proveedores] = useState([
    { 
      id: 1, 
      nombre: 'Frutas del Valle', 
      contacto: 'Juan Pérez', 
      telefono: '809-555-0101', 
      email: 'ventas@frutasdelvalle.com', 
      direccion: 'Av. Circunvalación #123',
      rating: 4.8,
      entregasPuntuales: 94,
      precioPromedio: 185,
      productos: ['Jugo Naranja', 'Jugo Mango', 'Agua'],
      ultimaEntrega: '2024-01-12',
      tiempoEntrega: 2
    },
    { 
      id: 2, 
      nombre: 'Snacks Central', 
      contacto: 'María Rodríguez', 
      telefono: '809-555-0102', 
      email: 'ventas@snackscentral.com', 
      direccion: 'Zona Industrial Km 5',
      rating: 4.5,
      entregasPuntuales: 88,
      precioPromedio: 42,
      productos: ['Snack Maíz', 'Mixto'],
      ultimaEntrega: '2024-01-10',
      tiempoEntrega: 3
    },
    { 
      id: 3, 
      nombre: 'Bebidas Nacionales', 
      contacto: 'Carlos Santos', 
      telefono: '809-555-0103', 
      email: 'csantos@bebidasnacionales.com', 
      direccion: 'Av. John F. Kennedy #456',
      rating: 4.9,
      entregasPuntuales: 97,
      precioPromedio: 120,
      productos: ['Cerveza', 'Agua', 'Refrescos'],
      ultimaEntrega: '2024-01-14',
      tiempoEntrega: 1
    },
    { 
      id: 4, 
      nombre: 'Distribuidora del Norte', 
      contacto: 'Ana Martínez', 
      telefono: '809-555-0104', 
      email: 'compras@distnorte.com', 
      direccion: 'Calle Principal #78',
      rating: 4.2,
      entregasPuntuales: 82,
      precioPromedio: 95,
      productos: ['Productos varios'],
      ultimaEntrega: '2024-01-08',
      tiempoEntrega: 4
    }
  ])

  // Datos de órdenes de compra
  const [ordenes, setOrdenes] = useState([
    { 
      id: 'OC-2024-001', 
      proveedor: 'Frutas del Valle', 
      productos: [{ nombre: 'Jugo Naranja', cantidad: 100, precio: 185 }], 
      total: 18500, 
      estado: 'recibida', 
      fecha: '2024-01-10',
      recibida: '2024-01-12'
    },
    { 
      id: 'OC-2024-002', 
      proveedor: 'Snacks Central', 
      productos: [{ nombre: 'Snack Maíz', cantidad: 500, precio: 42 }], 
      total: 21000, 
      estado: 'aprobada', 
      fecha: '2024-01-12',
      aprobada: '2024-01-12'
    },
    { 
      id: 'OC-2024-003', 
      proveedor: 'Bebidas Nacionales', 
      productos: [{ nombre: 'Cerveza', cantidad: 200, precio: 120 }], 
      total: 24000, 
      estado: 'enviada', 
      fecha: '2024-01-13',
      enviada: '2024-01-13'
    },
    { 
      id: 'OC-2024-004', 
      proveedor: 'Distribuidora del Norte', 
      productos: [{ nombre: 'Mixto', cantidad: 100, precio: 113.33 }], 
      total: 11333, 
      estado: 'borrador', 
      fecha: '2024-01-14'
    },
    { 
      id: 'OC-2024-005', 
      proveedor: 'Frutas del Valle', 
      productos: [{ nombre: 'Jugo Mango', cantidad: 150, precio: 160 }], 
      total: 24000, 
      estado: 'aprobada', 
      fecha: '2024-01-14',
      aprobada: '2024-01-14'
    }
  ])

  // Recomendaciones IA
  const [recomendacionesIA] = useState([
    {
      id: 1,
      producto: 'Jugo Naranja',
      proveedorRecomendado: 'Frutas del Valle',
      razon: 'Tiene el mejor precio (RD$185 vs promedio RD$198) y su última entrega llegó en solo 2 días',
      urgencia: 'alta',
      stockActual: 45,
      puntoReorden: 100
    },
    {
      id: 2,
      producto: 'Snack Maíz',
      proveedorRecomendado: 'Snacks Central',
      razon: 'Rating 4.5/5 y 88% de entregas puntuales. Precio competitivo.',
      urgencia: 'media',
      stockActual: 120,
      puntoReorden: 150
    }
  ])

  const getEstadoInfo = (estado) => {
    const estadosMap = {
      borrador: { label: 'Borrador', color: '#94a3b8', bg: 'rgba(148,163,184,.12)', icon: <IconEdit /> },
      aprobada: { label: 'Aprobada', color: '#3b82f6', bg: 'rgba(59,130,246,.12)', icon: <IconCheckCircle /> },
      enviada: { label: 'Enviada', color: '#f59e0b', bg: 'rgba(245,158,11,.12)', icon: <IconSend /> },
      recibida: { label: 'Recibida', color: '#10b981', bg: 'rgba(16,185,129,.12)', icon: <IconArchive /> }
    }
    return estadosMap[estado] || { label: estado, color: '#6b7280', bg: 'rgba(107,114,128,.12)', icon: null }
  }

  const handleConfirmReceipt = (order) => {
    alert(`✅ Confirmada recepción de ${order.id}\n\n• Stock actualizado en inventario\n• Movimiento registrado\n• Alertas de stock bajo resueltas automáticamente\n\nn8n workflow ejecutado correctamente.`)
    
    // Actualizar estado de la orden
    setOrdenes(prev => prev.map(o => 
      o.id === order.id ? { ...o, estado: 'recibida', recibida: new Date().toISOString().split('T')[0] } : o
    ))
  }

  const handleSendOrder = (order) => {
    alert(`📧 Orden ${order.id} enviada al proveedor ${order.proveedor}\n\n• Email enviado\n• Estado actualizado a "enviada"`)
    
    setOrdenes(prev => prev.map(o => 
      o.id === order.id ? { ...o, estado: 'enviada', enviada: new Date().toISOString().split('T')[0] } : o
    ))
  }

  const handleApproveOrder = (order) => {
    alert(`✅ Orden ${order.id} aprobada\n\nLista para ser enviada al proveedor.`)
    
    setOrdenes(prev => prev.map(o => 
      o.id === order.id ? { ...o, estado: 'aprobada', aprobada: new Date().toISOString().split('T')[0] } : o
    ))
  }

  const filteredProveedores = proveedores.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.productos.some(prod => prod.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const filteredOrdenes = ordenes.filter(o =>
    o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.proveedor.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <DashboardLayout title="Compras" subtitle="gestión de proveedores y órdenes de compra">
      <style>{`
        :root {
          --c-compras: #8b5cf6;
          --c-compras-light: #a78bfa;
          --c-compras-dark: #7c3aed;
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .tab-btn.active {
          background: var(--c-compras);
          color: white;
          box-shadow: 0 2px 8px rgba(139,92,246,.25);
        }
        .tab-btn:hover:not(.active) {
          background: rgba(139,92,246,.08);
          color: var(--c-compras);
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
          background: var(--c-compras);
        }
        .kpi-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(139,92,246,.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          color: var(--c-compras);
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

        .ia-card {
          background: linear-gradient(135deg, rgba(139,92,246,.05), rgba(139,92,246,.02));
          border: 1.5px solid rgba(139,92,246,.2);
          border-radius: var(--radius);
          padding: 20px;
          margin-bottom: 24px;
        }
        .ia-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ia-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(139,92,246,.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-compras);
        }
        .ia-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
        }
        .ia-subtitle {
          font-size: 12px;
          color: var(--text-3);
        }
        .recommendation-card {
          background: var(--card);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        .recommendation-card:hover {
          transform: translateX(4px);
          border-color: var(--c-compras);
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

        .rating-stars {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .star-filled { color: #fbbf24; fill: #fbbf24; }
        .star-half { color: #fbbf24; fill: #fbbf24; }
        .star-empty { color: #e2e8f0; }

        .btn-primary {
          background: var(--c-compras);
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
          background: var(--c-compras-dark);
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
          border-color: var(--c-compras);
          color: var(--c-compras);
        }
        .btn-outline {
          background: transparent;
          border: 1.5px solid var(--c-compras);
          color: var(--c-compras);
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
          background: var(--c-compras);
          color: white;
        }
        .btn-success {
          background: #10b981;
          color: white;
          border: none;
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
        .btn-success:hover {
          background: #059669;
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
          outline: none;
          transition: all 0.2s;
        }
        .form-select:focus, .form-input:focus {
          border-color: var(--c-compras);
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
          gap: 16px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: #f8fafc;
          border-radius: 8px;
          font-size: 11px;
          color: var(--text-2);
        }
      `}</style>

      <div style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon"><IconShoppingCart /></div>
            <div className="kpi-label">Órdenes Activas</div>
            <div className="kpi-value">8</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +2 vs ayer</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconPackage /></div>
            <div className="kpi-label">Productos a Reordenar</div>
            <div className="kpi-value">12</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> Sistema automático</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconUsers /></div>
            <div className="kpi-label">Proveedores Activos</div>
            <div className="kpi-value">24</div>
            <div className="kpi-trend trend-up"><IconTrendingUp /> +3 este mes</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon"><IconTruck /></div>
            <div className="kpi-label">Entregas Pendientes</div>
            <div className="kpi-value">3</div>
            <div className="kpi-trend trend-down"><IconTrendingDown /> -1 vs ayer</div>
          </div>
        </div>

        {/* IA Recommendations */}
        <div className="ia-card">
          <div className="ia-header">
            <div className="ia-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <div className="ia-title">🤖 Agente IA - Gemini</div>
              <div className="ia-subtitle">Recomendaciones de compra basadas en análisis histórico</div>
            </div>
          </div>
          {recomendacionesIA.map(rec => (
            <div key={rec.id} className="recommendation-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconPackage /> {rec.producto}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--c-compras)', marginTop: '4px' }}>
                    → Recomendado: {rec.proveedorRecomendado}
                  </div>
                </div>
                <span className="estado-badge" style={{ background: rec.urgencia === 'alta' ? 'rgba(239,68,68,.12)' : 'rgba(245,158,11,.12)', color: rec.urgencia === 'alta' ? '#ef4444' : '#f59e0b' }}>
                  <IconAlertCircle /> {rec.urgencia === 'alta' ? 'Urgente' : 'Pendiente'}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-2)', marginBottom: '12px' }}>{rec.razon}</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div className="info-badge"><IconPackage /> Stock: {rec.stockActual} und</div>
                <div className="info-badge"><IconAlertCircle /> Punto reorden: {rec.puntoReorden}</div>
                <button className="btn-outline" style={{ marginLeft: 'auto' }}>Crear orden de compra →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button className={`tab-btn ${activeTab === 'proveedores' ? 'active' : ''}`} onClick={() => setActiveTab('proveedores')}>
            <IconUsers /> Proveedores
          </button>
          <button className={`tab-btn ${activeTab === 'ordenes' ? 'active' : ''}`} onClick={() => setActiveTab('ordenes')}>
            <IconShoppingCart /> Órdenes de Compra
          </button>
        </div>

        {/* Tab: Proveedores */}
        {activeTab === 'proveedores' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div className="search-box">
                <IconSearch />
                <input 
                  type="text" 
                  placeholder="Buscar proveedor o producto..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconFilter />
              </div>
              <button className="btn-primary"><IconPlus /> Nuevo Proveedor</button>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              {filteredProveedores.map(proveedor => (
                <div key={proveedor.id} className="recommendation-card" onClick={() => setSelectedProvider(proveedor)} style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{proveedor.nombre}</h3>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--text-2)' }}>
                        <span><IconPhone /> {proveedor.telefono}</span>
                        <span><IconMail /> {proveedor.email}</span>
                      </div>
                    </div>
                    <div className="rating-stars">
                      {[1,2,3,4,5].map(star => (
                        <span key={star} style={{ color: star <= Math.floor(proveedor.rating) ? '#fbbf24' : star <= proveedor.rating ? '#fbbf24' : '#e2e8f0' }}>
                          <IconStar />
                        </span>
                      ))}
                      <span style={{ marginLeft: '4px', fontSize: '12px', fontWeight: '600' }}>{proveedor.rating}</span>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-badge"><IconCheckCircle /> Entregas puntuales: {proveedor.entregasPuntuales}%</div>
                    <div className="info-badge"><IconTruck /> Tiempo entrega: {proveedor.tiempoEntrega} días</div>
                    <div className="info-badge"><IconPackage /> Precio promedio: RD${proveedor.precioPromedio}</div>
                    <div className="info-badge"><IconCalendar /> Última entrega: {proveedor.ultimaEntrega}</div>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '4px' }}>Productos que suministra:</div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {proveedor.productos.map(p => (
                        <span key={p} className="info-badge" style={{ background: 'var(--c-compras)', color: 'white' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Tab: Órdenes de Compra */}
        {activeTab === 'ordenes' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div className="search-box">
                <IconSearch />
                <input 
                  type="text" 
                  placeholder="Buscar orden o proveedor..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="btn-primary" onClick={() => setShowNewOrderModal(true)}><IconPlus /> Nueva Orden</button>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr><th># Orden</th><th>Proveedor</th><th>Productos</th><th>Total</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                  {filteredOrdenes.map(order => {
                    const estadoInfo = getEstadoInfo(order.estado)
                    return (
                      <tr key={order.id}>
                        <td><strong>{order.id}</strong></td>
                        <td>{order.proveedor}</td>
                        <td style={{ fontSize: '12px' }}>{order.productos.map(p => `${p.nombre} x${p.cantidad}`).join(', ')}</td>
                        <td><strong>RD${order.total.toLocaleString()}</strong></td>
                        <td>
                          <span className="estado-badge" style={{ background: estadoInfo.bg, color: estadoInfo.color }}>
                            {estadoInfo.icon} {estadoInfo.label}
                          </span>
                        </td>
                        <td><IconCalendar /> {order.fecha}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-outline" onClick={() => setSelectedOrder(order)}><IconEye /> Ver</button>
                            {order.estado === 'borrador' && (
                              <button className="btn-outline" onClick={() => handleApproveOrder(order)}><IconCheckCircle /> Aprobar</button>
                            )}
                            {order.estado === 'aprobada' && (
                              <button className="btn-outline" onClick={() => handleSendOrder(order)}><IconSend /> Enviar</button>
                            )}
                            {order.estado === 'enviada' && (
                              <button className="btn-success" onClick={() => handleConfirmReceipt(order)}><IconArchive /> Recibir</button>
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

        {/* Modal Nueva Orden */}
        {showNewOrderModal && (
          <div className="modal-overlay" onClick={() => setShowNewOrderModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconShoppingCart /> Nueva Orden de Compra</h2>
                <button onClick={() => setShowNewOrderModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group">
                <label className="form-label">Seleccionar Proveedor</label>
                <select className="form-select">
                  <option value="">-- Seleccione un proveedor --</option>
                  {proveedores.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Productos</label>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <select className="form-select" style={{ flex: 2 }}>
                    <option>Seleccionar producto</option>
                    <option>Jugo Naranja</option>
                    <option>Jugo Mango</option>
                    <option>Snack Maíz</option>
                  </select>
                  <input type="number" placeholder="Cantidad" className="form-input" style={{ flex: 1 }} />
                  <button className="btn-primary" style={{ padding: '10px 20px' }}><IconPlus /></button>
                </div>
                <div className="table-wrapper" style={{ marginTop: '16px' }}>
                  <table style={{ fontSize: '12px' }}>
                    <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr></thead>
                    <tbody><tr><td colSpan="4" style={{ textAlign: 'center', color: 'var(--text-3)' }}>No hay productos agregados</td></tr></tbody>
                  </table>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <div><span style={{ fontSize: '14px', color: 'var(--text-2)' }}>Total:</span><strong style={{ fontSize: '24px', marginLeft: '8px' }}>RD$0</strong></div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="btn-secondary" onClick={() => setShowNewOrderModal(false)}>Guardar Borrador</button>
                  <button className="btn-primary" onClick={() => { setShowNewOrderModal(false); alert('✅ Orden creada como borrador para revisión'); }}>Crear Orden →</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Detalle Proveedor */}
        {selectedProvider && (
          <div className="modal-overlay" onClick={() => setSelectedProvider(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconUsers /> {selectedProvider.nombre}</h2>
                <button onClick={() => setSelectedProvider(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group"><label className="form-label"><IconPhone /> Contacto</label><div><strong>{selectedProvider.contacto}</strong></div></div>
              <div className="form-group"><label className="form-label"><IconPhone /> Teléfono</label><div>{selectedProvider.telefono}</div></div>
              <div className="form-group"><label className="form-label"><IconMail /> Email</label><div>{selectedProvider.email}</div></div>
              <div className="form-group"><label className="form-label"><IconMapPin /> Dirección</label><div>{selectedProvider.direccion}</div></div>
              <div className="form-group"><label className="form-label"><IconStar /> Rating</label><div>{selectedProvider.rating} / 5.0 ({selectedProvider.entregasPuntuales}% entregas puntuales)</div></div>
              <div className="form-group"><label className="form-label"><IconTruck /> Tiempo de entrega promedio</label><div>{selectedProvider.tiempoEntrega} días</div></div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={() => setSelectedProvider(null)}>Cerrar</button>
            </div>
          </div>
        )}

        {/* Modal Detalle Orden */}
        {selectedOrder && (
          <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconShoppingCart /> {selectedOrder.id}</h2>
                <button onClick={() => setSelectedOrder(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group"><label className="form-label">Proveedor</label><div><strong>{selectedOrder.proveedor}</strong></div></div>
              <div className="form-group"><label className="form-label">Fecha de creación</label><div>{selectedOrder.fecha}</div></div>
              {selectedOrder.aprobada && <div className="form-group"><label className="form-label">Fecha aprobación</label><div>{selectedOrder.aprobada}</div></div>}
              {selectedOrder.enviada && <div className="form-group"><label className="form-label">Fecha envío</label><div>{selectedOrder.enviada}</div></div>}
              {selectedOrder.recibida && <div className="form-group"><label className="form-label">Fecha recepción</label><div>{selectedOrder.recibida}</div></div>}
              <div className="form-group"><label className="form-label">Estado</label><div><span className="estado-badge" style={{ background: getEstadoInfo(selectedOrder.estado).bg, color: getEstadoInfo(selectedOrder.estado).color }}>{getEstadoInfo(selectedOrder.estado).label}</span></div></div>
              <div className="form-group"><label className="form-label">Productos</label>
                <div className="table-wrapper">
                  <table style={{ fontSize: '12px' }}>
                    <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr></thead>
                    <tbody>
                      {selectedOrder.productos.map((p, i) => (
                        <tr key={i}><td>{p.nombre}</td><td>{p.cantidad}</td><td>RD${p.precio}</td><td>RD${(p.cantidad * p.precio).toLocaleString()}</td></tr>
                      ))}
                      <tr style={{ borderTop: '2px solid var(--border)' }}><td colSpan="3" style={{ textAlign: 'right', fontWeight: '700' }}>Total:</td><td><strong>RD${selectedOrder.total.toLocaleString()}</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {selectedOrder.estado === 'borrador' && (
                  <button className="btn-primary" style={{ flex: 1 }} onClick={() => { handleApproveOrder(selectedOrder); setSelectedOrder(null); }}>Aprobar Orden</button>
                )}
                {selectedOrder.estado === 'aprobada' && (
                  <button className="btn-primary" style={{ flex: 1 }} onClick={() => { handleSendOrder(selectedOrder); setSelectedOrder(null); }}>Enviar al Proveedor</button>
                )}
                {selectedOrder.estado === 'enviada' && (
                  <button className="btn-success" style={{ flex: 1 }} onClick={() => { handleConfirmReceipt(selectedOrder); setSelectedOrder(null); }}>Confirmar Recepción</button>
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