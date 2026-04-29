import { useState } from 'react'

export default function IaChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'ai', text: '¡Hola! Soy el Asistente IA de Central Smart System. ¿En qué puedo ayudarte hoy?' }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages(prev => [...prev, { type: 'user', text: inputValue }])
      setInputValue('')
      // Aquí iría la lógica para enviar a la IA y recibir respuesta
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'ai', text: 'Esta es una respuesta simulada del asistente IA.' }])
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={handleOpen}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
          zIndex: 1000,
          fontSize: '10px',
          fontWeight: '600'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        IA
      </button>
    )
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          width: '90%',
          maxWidth: '500px',
          height: '80%',
          maxHeight: '600px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: '#2563eb',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              C
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>
                Asistente Central Smart System
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%'
              }}
            >
              <div
                style={{
                  background: msg.type === 'user' ? '#2563eb' : '#1e293b',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            padding: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            gap: '12px'
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
            style={{
              flex: 1,
              background: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '12px 16px',
              color: 'white',
              fontSize: '14px',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#2563eb'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            style={{
              background: inputValue.trim() ? '#2563eb' : '#475569',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 16px',
              color: 'white',
              cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22,2 15,22 11,13 2,9"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}