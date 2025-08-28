import { Router } from 'express';
import { run, get, all } from '../db.js';
import { authRequired } from '../middleware/auth.js';

const router = Router();

router.post('/create', authRequired, async (req, res) => {
  // Calcula total desde el carrito activo
  const cart = await get('SELECT * FROM carts WHERE user_id = ? AND status = "active"', [req.user.id]);
  if (!cart) return res.status(400).json({ error: 'No hay carrito activo' });
  const items = await all(`
    SELECT p.title, p.price, ci.quantity
    FROM cart_items ci JOIN products p ON p.id = ci.product_id
    WHERE ci.cart_id = ?`, [cart.id]);
  if (items.length === 0) return res.status(400).json({ error: 'Carrito vacío' });
  const total = items.reduce((acc, it) => acc + it.price * it.quantity, 0);
  const r = await run('INSERT INTO orders (user_id, status, total) VALUES (?, "created", ?)', [req.user.id, total]);
  const order = await get('SELECT * FROM orders WHERE id = ?', [r.lastID]);
  res.json(order);
});

router.get('/', authRequired, async (req, res) => {
  const rows = await all('SELECT * FROM orders WHERE user_id = ? ORDER BY id DESC', [req.user.id]);
  res.json(rows);
});

export default router;
