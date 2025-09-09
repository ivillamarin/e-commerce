# E-commerce básico (Node + Express + SQLite + Mercado Pago)

Proyecto de ejemplo fullstack con:
- Catálogo de productos
- Carrito de compras
- Registro/login de usuarios (JWT)
- Órdenes
- Integración de pagos con Mercado Pago (preferencias)
- Frontend simple en HTML/CSS/JS vanilla

## Requisitos
- Node 18+
- npm
- (Opcional) Cuenta de Mercado Pago + credenciales de prueba

## Configuración
1. Crear archivo `.env` en `server/` a partir de `.env.example`:
```
PORT=5173
JWT_SECRET=supersecreto
DATABASE_URL=./dev.sqlite
MP_ACCESS_TOKEN=TEST-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxx
MP_PUBLIC_KEY=TEST-xxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxx
BASE_URL=http://localhost:5173
```
> Usa claves **TEST** de Mercado Pago para desarrollo.

2. Instalar dependencias del servidor:
```
cd server
npm install
npm run dev
```
Esto crea la base de datos SQLite y levanta el backend en `http://localhost:5173` sirviendo también el frontend.

3. Abrí `http://localhost:5173` en el navegador.

## Flujo de pago (sandbox)
- Agregá productos al carrito y presioná **Pagar con Mercado Pago**.
- Se crea una *preference* y se redirige al checkout de MP (sandbox).
- Al finalizar, MP redirige a `success`, `failure` o `pending` (configurado en `payments.js`).

## Estructura
```
/client
  index.html
  dashboard.html
  styles.css
  app.js
  auth.js
/server
  .env.example
  package.json
  src/
    index.js
    config.js
    db.js
    models.sql
    middleware/auth.js
    routes/
      auth.js
      products.js
      cart.js
      orders.js
      payments.js
README.md
```

## Notas
- Este proyecto es educativo. Endurecé seguridad antes de producción (CORS, rate limit, validaciones, etc.).
- Si no configurás Mercado Pago, el resto funciona (catálogo/carrito/órdenes locales). El botón de pagar mostrará un error claro.

/*-----