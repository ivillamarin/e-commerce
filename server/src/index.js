// 1. Importaciones base
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { PORT, MP_PUBLIC_KEY } from './config.js';
import './db.js'; // init db
import authRoutes from './routes/auth.js';
import productsRouter from './routes/products.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/orders.js';
import paymentRoutes from './routes/payments.js';
import carritoRouter from './routes/carrito.js';

// 2. Configuración inicial
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Servir frontend estático
app.use(express.static(path.join(__dirname, '../../client')));

// Exponer public key de MP al frontend
app.get('/api/config', (req, res) => {
  res.json({ mpPublicKey: MP_PUBLIC_KEY });
});
app.use(express.json()); 

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/productos', productsRouter);
app.use('/api/carrito', carritoRouter);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// 4. Configuración de puerto
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Alpargatas Shop! 🧵🛍️');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

console.log("¡Servidor funcionando!");