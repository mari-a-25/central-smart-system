Stack: React + Vite, Supabase, Tailwind.

Objetivo: Sistema multi-tenant para gestión empresarial.

Estado actual: "Ya creé las 21 tablas en Supabase y el archivo .env".

Cada vez que abras un chat nuevo con cualquier IA, arrastra ese archivo y dile: "Lee este contexto primero".

---

## Estado actual detallado del proyecto

### Estructura del proyecto
El proyecto está organizado en una estructura modular clara:

- **Raíz del proyecto**:
  - `package.json`: Configuración de dependencias y scripts de Vite.
  - `vite.config.js`: Configuración de Vite con React y Tailwind.
  - `tailwind.config.js`: Configuración de Tailwind CSS con colores personalizados.
  - `eslint.config.js`: Configuración de ESLint para linting.
  - `postcss.config.js`: Configuración de PostCSS para Tailwind.
  - `.env`: Variables de entorno (Supabase URL, API key, Gemini API key).
  - `.env.example`: Plantilla de variables de entorno.
  - `index.html`: Punto de entrada HTML con meta tags y título "Central Smart System".
  - `README.md`: Documentación básica del proyecto.

- **Carpeta `src/`** (código fuente principal):
  - `App.jsx`: Componente raíz que envuelve AuthProvider y AppRouter con Suspense.
  - `main.jsx`: Punto de entrada que renderiza App en el DOM.
  - `index.css`: Estilos globales con Tailwind imports.
  - `App.css`: Estilos adicionales (actualmente vacío).

- **Carpeta `src/api/`**: Para futuras APIs personalizadas (vacía).

- **Carpeta `src/assets/`**:
  - `fonts/`: Para fuentes personalizadas (vacía).
  - `images/`: Para imágenes estáticas (vacía).

- **Carpeta `src/components/`**: Componentes reutilizables organizados por categorías:
  - `charts/`: Componentes de gráficas (vacío, preparado para Recharts).
  - `layout/`: Componentes de layout como sidebar, header (vacío).
  - `shared/`: Componentes compartidos como botones, modales (vacío).
  - `ui/`: Componentes de UI básicos (vacío).

- **Carpeta `src/context/`**:
  - `AuthContext.jsx`: Proveedor de autenticación que maneja sesiones de Supabase y carga perfiles/empresas.

- **Carpeta `src/hooks/`**:
  - `useLogin.js`: Hook personalizado para manejar login con validaciones de error.

- **Carpeta `src/lib/`**:
  - `supabase.js`: Configuración del cliente Supabase con validación de variables de entorno.
  - `subapase.js`: Archivo duplicado (posible error de tipeo, debería ser supabase.js).

- **Carpeta `src/modules/`**: Módulos del sistema organizados por funcionalidad:
  - `auth/`: Módulo de autenticación.
    - `components/`: Componentes específicos de auth (vacío).
    - `pages/`: Páginas de auth (LoginPage.jsx implementada).
  - `clientes/`, `compras/`, `configuracion/`, `contabilidad/`, `dashboard/`, `ia-chat/`, `inventario/`, `logistica/`, `produccion/`, `rrhh/`, `ventas/`: Todos con estructura `components/` y `pages/` preparada pero vacía.

- **Carpeta `src/routes/`**:
  - `AppRouter.jsx`: Configuración de rutas con React Router, rutas protegidas/públicas.

- **Carpeta `src/store/`**:
  - `authStore.js`: Store de Zustand para estado de autenticación (user, perfil, empresa, loading).

- **Carpeta `src/utils/`**: Utilidades generales (vacía).

- **Carpeta `supabase/migrations/`**: 22 archivos SQL con las definiciones de tablas:
  1. `001_empresas.sql`: Tabla de empresas multi-tenant.
  2. `002_usuarios.sql`: Usuarios con roles y empresa_id.
  3. `003_empleados.sql`: Datos de empleados.
  4. `004_asistencia.sql`: Registro de asistencia diaria.
  5. `005_categorias_producto.sql`: Categorías de productos.
  6. `006_productos.sql`: Catálogo de productos con stock.
  7. `007_movimientos_inventario.sql`: Historial de movimientos de stock.
  8. `008_trigger_stock.sql`: Trigger para actualizar stock automáticamente.
  9. `009_proveedores.sql`: Lista de proveedores.
  10. `010_ordenes_compra.sql`: Órdenes de compra a proveedores.
  11. `011_detalles_orden_compra.sql`: Detalles de órdenes de compra.
  12. `012_clientes.sql`: Base de datos de clientes.
  13. `013_pedidos.sql`: Pedidos de venta.
  14. `014_detalles_pedido.sql`: Detalles de pedidos.
  15. `015_facturas.sql`: Facturas generadas.
  16. `016_lotes_produccion.sql`: Lotes de producción.
  17. `017_conductores.sql`: Conductores para logística.
  18. `018_rutas.sql`: Rutas de entrega.
  19. `019_paradas_ruta.sql`: Paradas en rutas.
  20. `020_movimientos_contables.sql`: Movimientos contables automáticos.
  21. `021_tickets_clientes.sql`: Sistema de tickets de soporte.
  22. `022_alertas.sql`: Sistema de alertas del agente IA.

- **Carpeta `docs/`**: Documentación adicional (vacía).

- **Carpeta `n8n/`**: Workflows de n8n para automatizaciones (vacía).

- **Carpeta `public/`**: Archivos estáticos servidos por Vite (favicon, etc.).

### Dependencias instaladas
- **React 19.2.5**: Framework principal con hooks modernos.
- **Vite 8.0.10**: Build tool rápido para desarrollo.
- **Supabase 2.104.1**: Backend as a Service para auth, database, storage.
- **Tailwind CSS 4.2.4**: Framework CSS utility-first.
- **React Router DOM 7.14.2**: Routing para navegación SPA.
- **Zustand 5.0.12**: State management ligero.
- **React Query 5.100.5**: Gestión de estado server con caching.
- **Recharts 3.8.1**: Librería de gráficas para dashboards.
- **React Hot Toast 2.6.0**: Notificaciones toast.
- **Date-fns 4.1.0**: Utilidades de fechas.
- **jsPDF 4.2.1**: Generación de PDFs (para facturas).
- **Lucide React 1.11.0**: Iconos SVG.

### Configuración actual
- **Supabase**: Cliente configurado con URL y anon key desde .env. Base de datos con 22 tablas creadas y migradas.
- **Autenticación**: Sistema completo implementado con login, logout, protección de rutas, y carga de perfil/empresa.
- **Tailwind**: Configurado con colores personalizados para el branding.
- **Vite**: Configurado para React con HMR.
- **ESLint**: Configurado para calidad de código.

### Lo implementado actualmente
1. **Sistema de autenticación completo**:
   - LoginPage con UI moderna, validaciones, y modo demo.
   - AuthContext que maneja sesiones de Supabase.
   - AuthStore con Zustand para estado global.
   - useLogin hook con manejo de errores.
   - Rutas protegidas/públicas en AppRouter.

2. **Base de datos Supabase**:
   - 22 tablas creadas con relaciones apropiadas.
   - Triggers para stock automático.
   - Estructura multi-tenant con empresa_id en todas las tablas relevantes.

3. **Configuración de entorno**:
   - Variables de entorno configuradas (.env).
   - Cliente Supabase operativo.
   - API key de Gemini preparada para IA.

4. **Estructura del proyecto**:
   - Organización modular preparada para escalabilidad.
   - Componentes base listos para desarrollo.

### Lo pendiente de implementar
1. **Dashboard principal** (Pantalla 3):
   - KPIs en tiempo real con Supabase Realtime.
   - Gráfica de ventas semanales.
   - Panel de alertas IA.
   - Feed de actividad reciente.

2. **Módulo de Ventas** (Pantalla 4):
   - Gestión de pedidos con estados.
   - Base de clientes con clasificación.
   - Generación de facturas PDF.
   - Reportes de ventas.

3. **Módulo de Inventario** (Pantalla 5):
   - Vista de tarjetas de productos con barras de progreso.
   - Tabla de movimientos de inventario.
   - Alertas de stock bajo.

4. **Módulo de Compras** (Pantalla 6):
   - Gestión de proveedores y órdenes de compra.
   - Recomendaciones IA para compras.

5. **Módulo de Producción** (Pantalla 7):
   - Seguimiento de lotes de producción.
   - Planificación con IA.

6. **Módulo de Logística** (Pantalla 8):
   - Gestión de rutas y conductores.
   - Seguimiento de entregas.

7. **Módulo de RRHH** (Pantalla 9):
   - Gestión de empleados y asistencia.
   - Nómina automática.

8. **Módulo de Contabilidad** (Pantalla 10):
   - Movimientos contables automáticos.
   - Reportes financieros.

9. **Módulo de Clientes y Servicio al Cliente** (Pantalla 11):
   - CRM básico con tickets.
   - Chat con IA transversal.

10. **Configuración del sistema** (Pantalla 12):
    - Gestión de usuarios y roles.
    - Configuración de empresa.

11. **Integraciones adicionales**:
    - Workflows de n8n para automatizaciones.
    - Edge Functions de Supabase para IA.
    - Sistema de alertas completo.

12. **UI/UX polishing**:
    - Componentes compartidos (botones, modales, etc.).
    - Layout consistente con sidebar y header.
    - Tema responsive.

### Próximos pasos recomendados
1. Implementar el dashboard con KPIs y gráficas.
2. Desarrollar el módulo de ventas como base.
3. Agregar el sistema de alertas IA.
4. Implementar módulos uno por uno según prioridad de negocio.

---

## Stack Tecnológico Completo

### Frontend (Lo que ves en el navegador)
- **React 19.2.5**: Framework JavaScript para construir interfaces. Componentes reusables, useState para estados, hooks para lógica.
- **Vite 8.0.10**: Build tool ultrarrápido que reemplaza Webpack. HMR (Hot Module Replacement) para recarga instantánea durante desarrollo.
- **React Router DOM 7.14.2**: Librería de routing para navegación entre páginas sin recargar (SPA - Single Page Application).
- **Tailwind CSS 4.2.4**: Framework CSS utility-first. Define estilos con clases predefinidas (flex, p-4, etc). Junto con PostCSS 8.5.10 para procesamiento.
- **Zustand 5.0.12**: Estado global ligero. Almacena datos como usuario, empresa, permisos de forma accesible desde cualquier componente.
- **React Query 5.100.5**: Gestión de datos del servidor con caching automático. Evita peticiones duplicadas y sincroniza datos en tiempo real.
- **Recharts 3.8.1**: Librería de gráficas para dashboards (barras, líneas, donuts). Datos en tiempo real.

### UI/UX
- **Lucide React 1.11.0**: 400+ iconos SVG listos para usar. Reemplaza ImagenI o FontAwesome. Sistema de diseño consistente.
- **React Hot Toast 2.6.0**: Notificaciones emergentes (toasts) para confirmar acciones, errores, etc.
- **jsPDF 4.2.1**: Genera PDFs en el navegador. Para factures, reportes, etc. Sin necesidad de backend.
- **Date-fns 4.1.0**: Utilidades para manipular fechas. Formatos, cálculos, comparaciones.

### Backend/Database (Nube)
- **Supabase 2.104.1**: "Firebase de código abierto". Proporciona:
  - **Auth**: Autenticación de usuarios (login, signup, recuperar contraseña).
  - **Database**: PostgreSQL completamente gestionado. 22 tablas creadas ya.
  - **Storage**: Almacena archivos (logos, fotos, documentos).
  - **Realtime**: Subscripciones a cambios en BD. KPIs del dashboard se actualizan sin refresh.
  - **Edge Functions**: Funciones serverless que ejecutan código Node.js en la nube. Integración con Gemini API para IA.
  - **Webhooks**: Triggers automáticos cuando ocurren eventos (pedido creado, stock bajo).

### Herramientas de desarrollo
- **ESLint 10.2.1**: Analiza el código para errores y malas prácticas. Mantiene consistencia de estilo.
- **Autoprefixer 10.5.0**: Agrega prefijos de navegadores (-webkit-, -moz-) a CSS automáticamente.
- **PostCSS 8.5.10**: Procesador de CSS que permite usar CSS moderno. Plugins como Tailwind lo usan.
- **PostCSS Nesting 14.0.0**: Permite anidar CSS como SCSS (opcional, para estilos complejos).

### Package Manager
- **npm**: Gestor de paquetes. `npm install` descarga dependencias, `npm run dev` inicia servidor de desarrollo.

---

### Resumen del flujo tecnológico

1. **Usuario escribe en el navegador**: `localhost:5173` (Vite dev server).
2. **React renderiza** los componentes (LoginPage, Dashboard, etc).
3. **Tailwind CSS** estiliza todo con clases utility.
4. **React Router** maneja navegación entre pantallas sin recargar.
5. **Zustand** guarda estado global (usuario, empresa, permisos).
6. **React Query** cachea datos del servidor.
7. **Supabase Client** envía peticiones a la BD en la nube.
8. **Edge Functions** de Supabase procesan lógica compleja (IA, webhooks).
9. **Gemini API** genera respuestas inteligentes para el chat.
10. **jsPDF** genera PDFs en el navegador (facturas).
11. **Recharts** dibuja gráficas interactivas.
12. **Lucide React** proporciona los iconos.
13. **React Hot Toast** muestra notificaciones.

---

### Por qué este stack para este proyecto

- **React + Vite**: Desarrollo rápido con HMR. Ideal para prototipos y MVPs.
- **Tailwind**: Estilos rápidos sin escribir CSS manual. Tema consistente en todo el sistema.
- **Supabase**: No necesitas backend personal. Auth, DB, Storage todo listo. Webhooks y Functions para automatizaciones.
- **Zustand**: Estado global simple sin boilerplate (Redux es demasiado).
- **React Query**: Sincronización de datos servidor-cliente automática.
- **Recharts**: Gráficas bonitas sin D3.js complejo.
- **Edge Functions**: Lógica de servidor sin mantener un servidor.

---

## NovaOS — Descripción detallada de cada módulo e interfaz

---

### Pantalla 1 — Login y autenticación

Esta es la primera pantalla que ve cualquier persona al entrar al sistema. Visualmente tiene un fondo oscuro con el logo de NovaOS centrado, un formulario con dos campos (correo electrónico y contraseña), y un botón principal de ingreso. Debajo del formulario hay una sección de "acceso demo" donde puedes seleccionar un rol antes de entrar sin credenciales reales, útil para presentaciones en la feria.

Lo que sucede internamente cuando alguien hace login es lo siguiente: React toma las credenciales y las envía a Supabase Auth, que verifica si el usuario existe y si la contraseña es correcta. Supabase devuelve un token de sesión que React guarda en memoria. Luego el sistema consulta la tabla `usuarios` para saber qué rol tiene esa persona (admin, empleado, cliente o proveedor) y a qué empresa pertenece. Con esa información, React Router redirige automáticamente a la pantalla correcta. Un administrador va al dashboard completo, un empleado de ventas va directo al módulo de ventas, un cliente va a un portal simplificado donde solo ve sus pedidos, y un proveedor ve únicamente sus órdenes de compra pendientes.

La lógica de multi-tenant vive aquí. Cada usuario tiene un `empresa_id` en la base de datos, y ese identificador se guarda en el contexto global de React al hacer login. A partir de ese momento, todas las consultas a Supabase incluyen automáticamente ese filtro, así que es imposible que un usuario de una empresa vea datos de otra.

---

### Pantalla 2 — Registro de empresa (Onboarding)

Esta pantalla existe porque el sistema está diseñado para que cualquier empresa se registre, no solo La Nueva Esperanza. Es un wizard de tres pasos que guía al fundador o administrador durante la configuración inicial.

El primer paso pide el nombre de la empresa, RNC o número fiscal, el sector (alimenticio, textil, servicios, etc.) y el país. El segundo paso permite subir el logo de la empresa y elegir el color principal del sistema, lo que hace que cuando los empleados entren vean una versión del dashboard con la identidad visual de su empresa. El tercer paso permite invitar a los primeros empleados por correo electrónico, asignándoles un rol antes de que acepten la invitación.

Cuando el usuario completa el wizard, React hace tres operaciones seguidas en Supabase: primero inserta el registro en la tabla `empresas`, luego crea el primer usuario administrador vinculado a esa empresa, y finalmente sube el logo a Supabase Storage si se proporcionó uno. Después de todo eso redirige al dashboard ya con la empresa configurada.

---

### Pantalla 3 — Dashboard principal

Es la vista central del sistema, la que ven todos los roles con permisos suficientes. Está dividida en varias zonas bien definidas.

En la parte superior hay cuatro tarjetas de KPIs que muestran las métricas más importantes del día en tiempo real: ventas totales de la jornada, número de entregas activas, cantidad de alertas críticas de inventario y el balance de caja disponible. Estos números no son estáticos, están conectados a Supabase Realtime, lo que significa que si alguien en el módulo de ventas registra un pedido nuevo en ese momento, el número de ventas del dashboard sube automáticamente sin que nadie tenga que recargar la página.

Debajo de los KPIs hay una gráfica de barras que muestra las ventas de los últimos siete días. Está construida con una librería ligera de gráficas y los datos vienen de una consulta a la tabla `pedidos` agrupados por fecha.

A la derecha de la gráfica está el panel de alertas generadas por el agente IA. Estas alertas tienen tres niveles de urgencia: roja para situaciones críticas como stock agotado o un pedido sin conductor asignado, amarilla para situaciones de precaución como stock bajo el mínimo o un retraso en una ruta, y verde para confirmaciones positivas como una entrega completada o una nómina procesada exitosamente.

En la parte inferior hay un feed de actividad reciente que muestra las últimas acciones realizadas en cualquier módulo del sistema, con el nombre del usuario que la realizó, la descripción de la acción y hace cuánto tiempo ocurrió. Por ejemplo: "María Peña registró el pedido #1048 — hace 3 minutos".

Finalmente, en la parte superior del contenido hay una barra de chat con el agente IA. El usuario puede escribir cualquier pregunta en español como "¿cuánto vendimos esta semana?" o "¿qué productos están bajos de stock?" y el sistema responde con datos reales extraídos de la base de datos en ese momento.

---

### Pantalla 4 — Módulo de Ventas

Este módulo tiene cuatro pestañas internas que organizan toda la gestión comercial.

La pestaña de pedidos es la más usada. Muestra una tabla con todos los pedidos del día y los recientes, con columnas para el número de pedido, el nombre del cliente, los productos incluidos, el monto total, el estado actual y la fecha. Los estados posibles son: borrador (cuando se está armando), procesado (confirmado y listo para despacho), en ruta (asignado a un conductor), entregado y cancelado. Cada estado tiene un color distinto para identificarlo visualmente de un vistazo. Hay un botón de "nuevo pedido" que abre un formulario donde se selecciona el cliente de la lista existente, se agregan productos con sus cantidades, y el sistema calcula el total automáticamente. Cuando ese pedido se confirma, suceden tres cosas simultáneas en la base de datos: se inserta el registro en la tabla `pedidos`, se descuentan las cantidades del stock en la tabla `productos` mediante un movimiento en `movimientos_inventario`, y se dispara un evento en n8n que verifica si algún producto quedó bajo el mínimo para generar la alerta correspondiente.

La pestaña de clientes muestra la base completa de compradores con su clasificación (VIP, activo, nuevo), el número total de pedidos históricos y el monto acumulado de compras. Haciendo clic en un cliente se abre su ficha detallada con toda esa información más sus datos de contacto.

La pestaña de facturas permite generar el documento PDF de cualquier pedido confirmado. La factura se genera en el frontend con los datos del pedido y se puede descargar o enviar por correo.

La pestaña de reportes muestra gráficas de ventas por período, por producto y por cliente, útil para que el administrador tome decisiones.

---

### Pantalla 5 — Módulo de Inventario

Esta es una de las pantallas más visualmente informativas del sistema. En lugar de mostrar una tabla aburrida, muestra tarjetas individuales por cada producto. Cada tarjeta tiene el nombre del producto, la cantidad actual en stock, el mínimo establecido y una barra de progreso de color que va de verde (stock saludable) a amarillo (stock en precaución) a rojo (stock crítico o agotado).

Cuando un producto cae en estado crítico, su tarjeta se resalta con un borde rojo y aparece automáticamente un botón de acceso rápido que dice "crear orden de compra", que lleva al módulo de compras con el formulario pre-llenado con ese producto y la cantidad sugerida por el sistema.

Debajo de las tarjetas hay una tabla de movimientos de inventario que registra absolutamente cada entrada y salida de producto, indicando la cantidad, el tipo de movimiento y el módulo que lo originó. Si salieron 24 unidades de Jugo Naranja, la tabla muestra que fue la venta número 1048. Si entraron 200 unidades de Snack Maíz, muestra que fue la orden de compra OC-087. Esto crea una trazabilidad completa de cada unidad en el sistema.

La conexión de este módulo con los demás es bidireccional. Ventas descuenta, Compras suma, y Producción también puede sumar cuando un lote termina. Todas esas operaciones pasan obligatoriamente por la tabla `movimientos_inventario` para mantener el historial íntegro.

---

### Pantalla 6 — Módulo de Compras

El módulo de compras gestiona todo lo relacionado con los proveedores y las órdenes de compra.

La sección de proveedores muestra la lista completa con su nombre, información de contacto, un rating basado en el historial de entregas puntuales y el precio promedio histórico por producto. Esto le permite al administrador tomar decisiones informadas sobre a quién comprarle.

La sección de órdenes de compra es la central de este módulo. Cada orden tiene un estado que pasa por borrador, aprobada, enviada al proveedor y recibida. Cuando una orden llega al estado "recibida" y el usuario confirma la recepción de los productos, n8n ejecuta automáticamente el workflow de actualización de inventario: suma las cantidades al stock de cada producto incluido en la orden y registra el movimiento correspondiente. Si había alertas pendientes por stock bajo de esos productos, el sistema las marca automáticamente como resueltas.

El agente IA tiene un rol activo en este módulo. Cuando el sistema detecta que hay que reordenar un producto, Gemini analiza el historial de compras previas, el precio más reciente de cada proveedor que suministra ese producto, y el tiempo promedio de entrega, para luego generar una recomendación del tipo "te conviene comprar a Frutas del Valle, tienen el mejor precio y su última entrega llegó en 2 días".

---

### Pantalla 7 — Módulo de Producción

Este módulo es específico para empresas manufactureras como La Nueva Esperanza, que produce físicamente los jugos y snacks que vende.

La vista principal muestra los lotes de producción activos con su producto, la cantidad planificada, la cantidad producida hasta ahora y el estado del lote (planificado, en proceso, terminado o rechazado por calidad). Cada lote tiene una barra de progreso que muestra qué porcentaje de la producción está completado.

La sección de planificación es donde el agente IA aporta más valor en este módulo. El sistema analiza el historial de ventas de las últimas semanas para identificar cuáles productos se venden más y en qué días de la semana, y genera una sugerencia de producción para la semana siguiente. Por ejemplo: "basado en la tendencia, deberías producir 300 unidades de Jugo Naranja para el miércoles porque ese es tu día de mayor demanda".

El control de calidad se registra por lote. Cada lote puede marcarse como aprobado o rechazado. Si es rechazado, el sistema no suma esas unidades al inventario y registra el motivo del rechazo. Esto crea un historial de calidad que con el tiempo permite identificar si hay problemas recurrentes en la producción de algún producto específico.

---

### Pantalla 8 — Módulo de Logística

Este módulo gestiona todo el proceso de entrega desde que un pedido sale del almacén hasta que llega al cliente.

La parte superior tiene cuatro KPIs rápidos: rutas activas hoy, entregas completadas, entregas con retraso y el porcentaje de eficiencia general del día calculado como la proporción de entregas a tiempo sobre el total.

La tabla principal muestra las rutas activas con el nombre del conductor asignado, el número de paradas completadas sobre el total planificado, la hora estimada de finalización y el estado de la ruta. Cuando una ruta está marcada como "con retraso", el agente IA evalúa automáticamente si hay capacidad en otras rutas activas para reasignar las paradas pendientes, y presenta esa sugerencia como una alerta en el panel.

La sección de conductores muestra el desempeño individual de cada uno, calculado como el porcentaje de sus entregas históricas que llegaron a tiempo. Cuando un conductor cae consistentemente por debajo del umbral mínimo, el sistema genera una nota automática visible para el administrador de RRHH.

El seguimiento de pedidos permite que cualquier empleado de servicio al cliente busque un número de orden y vea exactamente en qué estado está: si fue procesado, si está en ruta con qué conductor, o si ya fue entregado y a qué hora.

---

### Pantalla 9 — Módulo de RRHH

Este módulo centraliza toda la gestión del personal de la empresa.

La lista de empleados muestra una tarjeta por persona con su foto o iniciales, nombre, área, salario base y estado actual. Hacer clic en cualquier empleado abre su ficha completa con todos sus datos personales, fecha de contratación, documentos adjuntos (cédula, contrato) almacenados en Supabase Storage, y su historial de asistencia mensual.

El registro de asistencia es una tabla diaria donde se marca el estado de cada empleado. Puede ser presente, ausente o tardanza. Esta tabla es la fuente de verdad para el cálculo de nómina, porque el sistema descuenta automáticamente los días ausentes sin justificación al momento de procesar el pago mensual.

El cálculo de nómina es completamente automático gracias al workflow de n8n. El primero de cada mes, el sistema toma todos los empleados activos, calcula el salario neto considerando la asistencia del mes, genera el movimiento contable de egreso correspondiente en la tabla de contabilidad, y crea una alerta para el administrador con el resumen total de nómina. El administrador solo necesita revisar y aprobar.

---

### Pantalla 10 — Módulo de Contabilidad

Este módulo no requiere que nadie ingrese datos manualmente, porque todos los movimientos financieros son generados automáticamente por los otros módulos del sistema.

Cuando se confirma una venta, se crea automáticamente un ingreso en `movimientos_contables`. Cuando se recibe una orden de compra, se crea un egreso. Cuando se procesa la nómina, se crea otro egreso. El módulo de contabilidad simplemente muestra todos esos movimientos organizados y calculados.

La vista principal tiene cuatro KPIs en la parte superior: ingresos totales del mes, gastos totales, utilidad neta (la resta de ambos) y el monto total de cuentas por cobrar (pedidos entregados pero no pagados todavía). Debajo hay una tabla cronológica de todos los movimientos con su concepto, tipo, monto y módulo de origen.

El agente IA analiza los gastos registrados y detecta anomalías. Si en un mes normal los gastos de compras son alrededor de RD$80,000 y este mes fueron RD$200,000, Gemini genera una alerta explicando la desviación y preguntando si fue una compra extraordinaria planificada.

La pantalla tiene un botón de exportar reporte PDF mensual que genera un documento con el balance del período, la tabla de movimientos y las gráficas de flujo de caja, listo para presentar al contador o a los socios.

---

### Pantalla 11 — Módulo de Clientes y Servicio al Cliente

La base de clientes funciona como un CRM básico. Cada cliente tiene una ficha con su nombre, tipo (mayorista o minorista), contacto, y estadísticas de su relación con la empresa: número de pedidos totales, monto acumulado comprado, fecha del último pedido y su clasificación automática. El sistema clasifica automáticamente como VIP a los clientes cuya compra acumulada supera un umbral configurable por la empresa, como activos a los que compraron en los últimos 30 días, y como inactivos a los que llevan más de 60 días sin comprar.

El sistema de tickets de servicio al cliente permite registrar quejas, solicitudes o consultas de clientes. Cada ticket tiene un estado (abierto, en atención, resuelto) y queda vinculado al cliente que lo generó. Esto reemplaza las listas de papel que mencionaba el ejercicio original. El historial completo de tickets de cada cliente es visible desde su ficha.

El chat con IA es transversal a toda la aplicación, no solo a este módulo. Desde cualquier pantalla el usuario puede abrir el asistente y hacer preguntas en español. El funcionamiento técnico es el siguiente: React captura la pregunta y la envía a una Supabase Edge Function, que es básicamente una función serverless que corre en la nube de Supabase. Esa función consulta los datos relevantes de la base de datos según el contexto de la pregunta, construye un prompt estructurado con esos datos y lo envía a la Gemini API. Gemini procesa el contexto y devuelve una respuesta en español natural, que la Edge Function retorna a React para mostrarla en el chat. Todo ese proceso toma entre 2 y 4 segundos.

---

### Pantalla 12 — Configuración del sistema

Esta es la pantalla de administración general del sistema, accesible solo para el rol de administrador.

La sección de datos de empresa permite editar el nombre, logo, moneda local, país y sector. Estos datos se muestran en varias partes del sistema, como en los encabezados de las facturas PDF y en el panel de bienvenida del dashboard.

La sección de usuarios y roles muestra todos los usuarios que tienen acceso al sistema de esa empresa. El administrador puede invitar nuevos usuarios por correo, cambiar el rol de cualquiera o desactivar el acceso de un empleado que ya no trabaja ahí. Desactivar el acceso no borra al usuario de la base de datos, solo cambia su estado a inactivo, preservando el historial de las acciones que realizó.

La sección de módulos activos permite que cada empresa decida qué módulos necesita. Una empresa de servicios que no tiene producción física puede desactivar completamente el módulo de producción para que no aparezca en el menú. Una empresa pequeña que no tiene conductores puede desactivar logística. Esto hace que el sistema sea adaptable a cualquier tipo de negocio sin necesidad de modificar código.

La sección de integración con IA es donde se ingresa la API key de Gemini. Esta key se almacena de forma segura en Supabase y nunca se expone en el frontend, siempre se usa desde las Edge Functions del servidor.

La sección de alertas permite configurar los umbrales de inventario mínimo para cada producto, los días de anticipación para alertas de contratos por vencer en RRHH, y qué tipos de alerta quiere recibir el administrador por correo electrónico.

---

Eso es todo el sistema completo. ¿Quieres que ahora pasemos al código, empezando por la estructura del proyecto en React con Vite y la configuración inicial de Supabase?