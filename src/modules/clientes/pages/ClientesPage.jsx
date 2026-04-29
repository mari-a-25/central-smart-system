import { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

// Iconos personalizados
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

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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

function IconMessageCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function IconHelpCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
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

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
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

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
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

function IconSend() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
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

function IconBot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <line x1="7" y1="11" x2="7" y2="7"/>
      <line x1="17" y1="11" x2="17" y2="7"/>
      <circle cx="9" cy="9" r="1"/>
      <circle cx="15" cy="9" r="1"/>
    </svg>
  )
}

export default function ClientesPage() {
  const [activeTab, setActiveTab] = useState('clientes')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClient, setSelectedClient] = useState(null)
  const [showTicketModal, setShowTicketModal] = useState(false)
  const [selectedTicketClient, setSelectedTicketClient] = useState(null)
  const [showChatModal, setShowChatModal] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'bot', message: '¡Hola! Soy el asistente IA de Central Smart System. ¿En qué puedo ayudarte hoy?', timestamp: new Date().toLocaleTimeString() }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isChatLoading, setIsChatLoading] = useState(false)

  // Datos de clientes
  const [clientes, setClientes] = useState([
    { 
      id: 1,
      nombre: 'Supermercado Rey',
      tipo: 'mayorista',
      contacto: 'Juan Pérez',
      telefono: '809-555-0101',
      email: 'ventas@superrey.com',
      direccion: 'Av. 27 de Febrero #123, Santiago',
      totalPedidos: 45,
      montoAcumulado: 125000,
      ultimoPedido: '2024-03-15',
      clasificacion: 'VIP',
      fechaRegistro: '2022-01-15'
    },
    { 
      id: 2,
      nombre: 'Colmado Peña',
      tipo: 'minorista',
      contacto: 'María Peña',
      telefono: '809-555-0102',
      email: 'colmpena@gmail.com',
      direccion: 'Calle Principal #45, Santiago',
      totalPedidos: 28,
      montoAcumulado: 45200,
      ultimoPedido: '2024-03-14',
      clasificacion: 'Activo',
      fechaRegistro: '2022-06-20'
    },
    { 
      id: 3,
      nombre: 'Tienda Martínez',
      tipo: 'minorista',
      contacto: 'Carlos Martínez',
      telefono: '809-555-0103',
      email: 'tiendamartinez@hotmail.com',
      direccion: 'Av. Libertad #789, Santiago',
      totalPedidos: 32,
      montoAcumulado: 67800,
      ultimoPedido: '2024-03-10',
      clasificacion: 'Activo',
      fechaRegistro: '2022-03-10'
    },
    { 
      id: 4,
      nombre: 'Pulpería San Juan',
      tipo: 'minorista',
      contacto: 'Ana Rodríguez',
      telefono: '809-555-0104',
      email: 'pulperiasj@yahoo.com',
      direccion: 'Calle San Juan #12, Santiago',
      totalPedidos: 67,
      montoAcumulado: 189300,
      ultimoPedido: '2024-03-13',
      clasificacion: 'VIP',
      fechaRegistro: '2021-11-05'
    },
    { 
      id: 5,
      nombre: 'Distribuidora Central',
      tipo: 'mayorista',
      contacto: 'Roberto Sánchez',
      telefono: '809-555-0105',
      email: 'distcentral@gmail.com',
      direccion: 'Zona Industrial Km 22, Santiago',
      totalPedidos: 12,
      montoAcumulado: 18900,
      ultimoPedido: '2024-02-28',
      clasificacion: 'Inactivo',
      fechaRegistro: '2023-05-12'
    }
  ])

  // Tickets de servicio al cliente
  const [tickets, setTickets] = useState([
    { 
      id: 1, 
      clienteId: 1, 
      cliente: 'Supermercado Rey',
      asunto: 'Retraso en entrega',
      descripcion: 'El pedido #1048 no ha llegado en la fecha acordada',
      estado: 'abierto',
      prioridad: 'alta',
      fechaCreacion: '2024-03-15 10:30:00',
      fechaActualizacion: '2024-03-15 10:30:00'
    },
    { 
      id: 2, 
      clienteId: 2, 
      cliente: 'Colmado Peña',
      asunto: 'Producto dañado',
      descripcion: 'Llegaron 10 unidades de snack con empaque roto',
      estado: 'en_atencion',
      prioridad: 'media',
      fechaCreacion: '2024-03-14 15:20:00',
      fechaActualizacion: '2024-03-15 09:00:00'
    },
    { 
      id: 3, 
      clienteId: 4, 
      cliente: 'Pulpería San Juan',
      asunto: 'Consulta sobre factura',
      descripcion: 'Necesito copia de la factura del pedido #1044',
      estado: 'resuelto',
      prioridad: 'baja',
      fechaCreacion: '2024-03-13 11:00:00',
      fechaActualizacion: '2024-03-14 16:30:00'
    }
  ])

  const getClasificacionInfo = (clasificacion) => {
    const info = {
      VIP: { color: '#ca8a04', bg: 'rgba(234,179,8,.12)', icon: <IconStar /> },
      Activo: { color: '#10b981', bg: 'rgba(16,185,129,.12)', icon: <IconCheckCircle /> },
      Inactivo: { color: '#ef4444', bg: 'rgba(239,68,68,.12)', icon: <IconAlertCircle /> }
    }
    return info[clasificacion] || info.Activo
  }

  const getEstadoTicketInfo = (estado) => {
    const info = {
      abierto: { label: 'Abierto', color: '#ef4444', bg: 'rgba(239,68,68,.12)', icon: <IconAlertCircle /> },
      en_atencion: { label: 'En Atención', color: '#f59e0b', bg: 'rgba(245,158,11,.12)', icon: <IconClock /> },
      resuelto: { label: 'Resuelto', color: '#10b981', bg: 'rgba(16,185,129,.12)', icon: <IconCheckCircle /> }
    }
    return info[estado] || info.abierto
  }

  const handleCreateTicket = (cliente, asunto, descripcion) => {
    const newTicket = {
      id: tickets.length + 1,
      clienteId: cliente.id,
      cliente: cliente.nombre,
      asunto,
      descripcion,
      estado: 'abierto',
      prioridad: 'media',
      fechaCreacion: new Date().toLocaleString(),
      fechaActualizacion: new Date().toLocaleString()
    }
    setTickets([newTicket, ...tickets])
    alert(`✅ Ticket creado exitosamente\n\nCliente: ${cliente.nombre}\nAsunto: ${asunto}\n\nEl equipo de servicio al cliente lo atenderá pronto.`)
  }

  const handleUpdateTicket = (ticketId, nuevoEstado) => {
    setTickets(prev => prev.map(t => 
      t.id === ticketId ? { ...t, estado: nuevoEstado, fechaActualizacion: new Date().toLocaleString() } : t
    ))
    alert(`✅ Ticket actualizado a: ${nuevoEstado === 'en_atencion' ? 'En Atención' : nuevoEstado === 'resuelto' ? 'Resuelto' : 'Abierto'}`)
  }

  // Simular consulta a Supabase Edge Function + Gemini API
  const handleSendChatMessage = async () => {
    if (!chatInput.trim()) return

    // Agregar mensaje del usuario
    const userMessage = { id: Date.now(), type: 'user', message: chatInput, timestamp: new Date().toLocaleTimeString() }
    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')
    setIsChatLoading(true)

    // Simular llamada a Supabase Edge Function + Gemini
    setTimeout(() => {
      // Respuesta simulada del asistente IA
      let botResponse = ''
      const query = chatInput.toLowerCase()
      
      if (query.includes('venta') || query.includes('pedido')) {
        botResponse = 'Según los datos del sistema, las ventas de este mes han sido de RD$88,850 con un total de 24 pedidos procesados. El ticket promedio es de RD$3,702. ¿Necesitas información más específica sobre algún pedido en particular?'
      } else if (query.includes('stock') || query.includes('inventario')) {
        botResponse = 'El inventario actual muestra que el producto con menor stock es "Mixto" con solo 12 unidades (crítico), seguido de "Jugo Mango" con 45 unidades. Recomiendo generar órdenes de compra para estos productos. ¿Te ayudo a crear una orden de compra?'
      } else if (query.includes('cliente') || query.includes('cliente vip')) {
        botResponse = 'Actualmente tenemos 128 clientes activos. Los clientes VIP son: Supermercado Rey (RD$125,000 acumulado) y Pulpería San Juan (RD$189,300 acumulado). Estos representan el 15% de nuestros ingresos totales.'
      } else if (query.includes('asistencia') || query.includes('ayuda')) {
        botResponse = 'Puedo ayudarte con consultas sobre ventas, inventario, clientes, compras, producción o RRHH. ¿Sobre qué módulo necesitas información específica? También puedes crear tickets de soporte para casos más complejos.'
      } else {
        botResponse = 'He analizado tu consulta en nuestra base de datos. Central Smart System tiene integrados los módulos de Ventas, Compras, Inventario, Producción, RRHH y Logística. ¿Sobre cuál te gustaría obtener información detallada?'
      }
      
      const botMessage = { id: Date.now() + 1, type: 'bot', message: botResponse, timestamp: new Date().toLocaleTimeString() }
      setChatMessages(prev => [...prev, botMessage])
      setIsChatLoading(false)
    }, 2000) // Simula el tiempo de respuesta de 2-4 segundos
  }

  const filteredClientes = clientes.filter(cliente =>
    cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.contacto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.clasificacion.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const clientesTickets = tickets.map(t => t.clienteId)
  const totalTicketsAbiertos = tickets.filter(t => t.estado !== 'resuelto').length

  return (
    <DashboardLayout title="Clientes" subtitle="gestión de clientes y servicio al cliente">
      <style>{`
        :root {
          --c-clientes: #34d399;
          --c-clientes-light: #6ee7b7;
          --c-clientes-dark: #10b981;
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
          background: var(--c-clientes);
          color: white;
          box-shadow: 0 2px 8px rgba(52,211,153,.25);
        }
        .tab-btn:hover:not(.active) {
          background: rgba(52,211,153,.08);
          color: var(--c-clientes);
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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
          background: var(--c-clientes);
        }
        .kpi-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
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

        .clientes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .cliente-card {
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          padding: 20px;
          transition: all 0.2s;
          cursor: pointer;
        }
        .cliente-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .cliente-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 12px;
        }
        .cliente-nombre {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .cliente-tipo {
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(52,211,153,.12);
          color: var(--c-clientes);
          font-weight: 600;
        }
        .clasificacion-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
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

        .estado-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
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

        .btn-primary {
          background: var(--c-clientes);
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
          background: var(--c-clientes-dark);
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
          border-color: var(--c-clientes);
          color: var(--c-clientes);
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
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 10px 14px;
          border: 2px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          font-family: inherit;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--c-clientes);
        }
        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .chat-modal {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 380px;
          height: 500px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          z-index: 1000;
        }
        .chat-header {
          padding: 16px;
          background: var(--c-clientes);
          color: white;
          border-radius: 16px 16px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chat-message {
          max-width: 80%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
        }
        .chat-message.user {
          align-self: flex-end;
          background: var(--c-clientes);
          color: white;
        }
        .chat-message.bot {
          align-self: flex-start;
          background: #f3f4f6;
          color: var(--text);
        }
        .chat-input-area {
          padding: 16px;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 8px;
        }
        .chat-input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid var(--border);
          border-radius: 20px;
          outline: none;
        }
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 10px 14px;
          background: #f3f4f6;
          border-radius: 12px;
          width: fit-content;
        }
        .typing-dot {
          width: 6px;
          height: 6px;
          background: #9ca3af;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>

      {/* Botón flotante de chat IA */}
      <button
        onClick={() => setShowChatModal(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--c-clientes)',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <IconBot />
      </button>

      <div style={{ padding: '24px 28px' }}>
        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: 'rgba(52,211,153,.1)', color: '#34d399' }}><IconUsers /></div>
            <div className="kpi-label">Total Clientes</div>
            <div className="kpi-value">{clientes.length}</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: 'rgba(234,179,8,.1)', color: '#ca8a04' }}><IconStar /></div>
            <div className="kpi-label">Clientes VIP</div>
            <div className="kpi-value">{clientes.filter(c => c.clasificacion === 'VIP').length}</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: 'rgba(239,68,68,.1)', color: '#ef4444' }}><IconHelpCircle /></div>
            <div className="kpi-label">Tickets Activos</div>
            <div className="kpi-value">{totalTicketsAbiertos}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button className={`tab-btn ${activeTab === 'clientes' ? 'active' : ''}`} onClick={() => setActiveTab('clientes')}>
            <IconUsers /> Clientes
          </button>
          <button className={`tab-btn ${activeTab === 'tickets' ? 'active' : ''}`} onClick={() => setActiveTab('tickets')}>
            <IconHelpCircle /> Tickets de Soporte
          </button>
        </div>

        {/* Tab: Clientes */}
        {activeTab === 'clientes' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div className="search-box">
                <IconSearch />
                <input 
                  type="text" 
                  placeholder="Buscar cliente por nombre, contacto o clasificación..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="btn-primary"><IconPlus /> Nuevo Cliente</button>
            </div>

            <div className="clientes-grid">
              {filteredClientes.map(cliente => {
                const clasifInfo = getClasificacionInfo(cliente.clasificacion)
                return (
                  <div key={cliente.id} className="cliente-card" onClick={() => setSelectedClient(cliente)}>
                    <div className="cliente-header">
                      <div>
                        <div className="cliente-nombre">{cliente.nombre}</div>
                        <div className="cliente-tipo">{cliente.tipo === 'mayorista' ? 'Mayorista' : 'Minorista'}</div>
                      </div>
                      <span className="clasificacion-badge" style={{ background: clasifInfo.bg, color: clasifInfo.color }}>
                        {clasifInfo.icon} {cliente.clasificacion}
                      </span>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>{cliente.contacto}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>{cliente.telefono} · {cliente.email}</div>
                    </div>
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Pedidos</span>
                        <span style={{ fontWeight: '600' }}>{cliente.totalPedidos}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Monto Acumulado</span>
                        <span style={{ fontWeight: '600', color: '#10b981' }}>RD${cliente.montoAcumulado.toLocaleString()}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Último Pedido</span>
                        <span style={{ fontSize: '12px' }}>{cliente.ultimoPedido}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Tab: Tickets de Soporte */}
        {activeTab === 'tickets' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div className="search-box">
                <IconSearch />
                <input type="text" placeholder="Buscar ticket por cliente o asunto..." />
              </div>
              <button className="btn-primary" onClick={() => setShowTicketModal(true)}><IconPlus /> Nuevo Ticket</button>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr><th>ID</th><th>Cliente</th><th>Asunto</th><th>Estado</th><th>Prioridad</th><th>Fecha Creación</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                  {tickets.map(ticket => {
                    const estadoInfo = getEstadoTicketInfo(ticket.estado)
                    return (
                      <tr key={ticket.id}>
                        <td><strong>#{ticket.id}</strong></td>
                        <td>{ticket.cliente}</td>
                        <td>{ticket.asunto}</td>
                        <td>
                          <span className="estado-badge" style={{ background: estadoInfo.bg, color: estadoInfo.color }}>
                            {estadoInfo.icon} {estadoInfo.label}
                          </span>
                        </td>
                        <td style={{ fontSize: '12px' }}>{ticket.prioridad === 'alta' ? '🔴 Alta' : ticket.prioridad === 'media' ? '🟡 Media' : '🟢 Baja'}</td>
                        <td style={{ fontSize: '12px' }}>{ticket.fechaCreacion.split(' ')[0]}</td>
                        <td>
                          <select 
                            className="form-select" 
                            style={{ width: 'auto', padding: '4px 8px', fontSize: '12px' }}
                            value={ticket.estado}
                            onChange={(e) => handleUpdateTicket(ticket.id, e.target.value)}
                          >
                            <option value="abierto">Abierto</option>
                            <option value="en_atencion">En Atención</option>
                            <option value="resuelto">Resuelto</option>
                          </select>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Modal Detalle Cliente */}
        {selectedClient && (
          <div className="modal-overlay" onClick={() => setSelectedClient(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconUsers /> {selectedClient.nombre}</h2>
                <button onClick={() => setSelectedClient(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group"><label className="form-label">Información de Contacto</label>
                <div><strong>Contacto:</strong> {selectedClient.contacto}</div>
                <div><strong>Teléfono:</strong> {selectedClient.telefono}</div>
                <div><strong>Email:</strong> {selectedClient.email}</div>
                <div><strong>Dirección:</strong> {selectedClient.direccion}</div>
              </div>
              <div className="form-group"><label className="form-label">Estadísticas</label>
                <div><strong>Tipo:</strong> {selectedClient.tipo === 'mayorista' ? 'Mayorista' : 'Minorista'}</div>
                <div><strong>Clasificación:</strong> <span className="clasificacion-badge" style={{ background: getClasificacionInfo(selectedClient.clasificacion).bg, color: getClasificacionInfo(selectedClient.clasificacion).color }}>{getClasificacionInfo(selectedClient.clasificacion).icon} {selectedClient.clasificacion}</span></div>
                <div><strong>Total Pedidos:</strong> {selectedClient.totalPedidos}</div>
                <div><strong>Monto Acumulado:</strong> <strong style={{ color: '#10b981' }}>RD${selectedClient.montoAcumulado.toLocaleString()}</strong></div>
                <div><strong>Último Pedido:</strong> {selectedClient.ultimoPedido}</div>
                <div><strong>Cliente desde:</strong> {selectedClient.fechaRegistro}</div>
              </div>
              <div className="form-group"><label className="form-label">Historial de Tickets</label>
                <div className="table-wrapper" style={{ marginTop: '8px' }}>
                  <table style={{ fontSize: '12px' }}>
                    <thead><tr><th>Ticket</th><th>Asunto</th><th>Estado</th><th>Fecha</th></tr></thead>
                    <tbody>
                      {tickets.filter(t => t.clienteId === selectedClient.id).map(t => (
                        <tr key={t.id}><td>#{t.id}</td><td>{t.asunto}</td><td>{t.estado}</td><td>{t.fechaCreacion.split(' ')[0]}</td></tr>
                      ))}
                      {tickets.filter(t => t.clienteId === selectedClient.id).length === 0 && (
                        <tr><td colSpan="4" style={{ textAlign: 'center', color: 'var(--text-3)' }}>No hay tickets registrados</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button className="btn-secondary" style={{ flex: 1 }} onClick={() => {
                  setSelectedClient(null)
                  setSelectedTicketClient(selectedClient)
                  setShowTicketModal(true)
                }}>Crear Ticket</button>
                <button className="btn-primary" style={{ flex: 1 }} onClick={() => setSelectedClient(null)}>Cerrar</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Nuevo Ticket */}
        {showTicketModal && (
          <div className="modal-overlay" onClick={() => { setShowTicketModal(false); setSelectedTicketClient(null) }}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title"><IconHelpCircle /> Nuevo Ticket de Soporte</h2>
                <button onClick={() => { setShowTicketModal(false); setSelectedTicketClient(null) }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IconX /></button>
              </div>
              <div className="form-group">
                <label className="form-label">Cliente</label>
                <select className="form-select" id="ticketCliente">
                  <option value="">Seleccionar cliente</option>
                  {clientes.map(c => <option key={c.id} value={c.id} selected={selectedTicketClient?.id === c.id}>{c.nombre}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Asunto</label>
                <input type="text" className="form-input" id="ticketAsunto" placeholder="Ej: Problema con entrega" />
              </div>
              <div className="form-group">
                <label className="form-label">Descripción</label>
                <textarea className="form-textarea" id="ticketDescripcion" placeholder="Detalle del problema o consulta..."></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Prioridad</label>
                <select className="form-select" id="ticketPrioridad">
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button className="btn-secondary" style={{ flex: 1 }} onClick={() => { setShowTicketModal(false); setSelectedTicketClient(null) }}>Cancelar</button>
                <button className="btn-primary" style={{ flex: 1 }} onClick={() => {
                  const clienteSelect = document.getElementById('ticketCliente')
                  const asunto = document.getElementById('ticketAsunto')?.value
                  const descripcion = document.getElementById('ticketDescripcion')?.value
                  const cliente = clientes.find(c => c.id === parseInt(clienteSelect.value))
                  if (cliente && asunto && descripcion) {
                    handleCreateTicket(cliente, asunto, descripcion)
                    setShowTicketModal(false)
                    setSelectedTicketClient(null)
                  } else {
                    alert('Por favor complete todos los campos')
                  }
                }}>Crear Ticket →</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Chat IA */}
        {showChatModal && (
          <div className="chat-modal">
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconBot />
                <span style={{ fontWeight: '600' }}>Asistente IA - Gemini</span>
              </div>
              <button onClick={() => setShowChatModal(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><IconX /></button>
            </div>
            <div className="chat-messages">
              {chatMessages.map(msg => (
                <div key={msg.id} className={`chat-message ${msg.type}`}>
                  <div>{msg.message}</div>
                  <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '4px' }}>{msg.timestamp}</div>
                </div>
              ))}
              {isChatLoading && (
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              )}
            </div>
            <div className="chat-input-area">
              <input
                type="text"
                className="chat-input"
                placeholder="Escribe tu pregunta aquí..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
              />
              <button className="btn-primary" style={{ padding: '8px 12px' }} onClick={handleSendChatMessage} disabled={isChatLoading}>
                <IconSend />
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}