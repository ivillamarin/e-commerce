import { Router } from 'express';
import { run, get, all } from '../db.js';
import { authRequired } from '../middleware/auth.js';

const router = Router();

async function ensureActiveCart(userId) {
  let cart = await get('SELECT * FROM carts WHERE user_id = ? AND status = "active"', [userId]);
  if (!cart) {
    await run('INSERT INTO carts (user_id, status) VALUES (?, "active")', [userId]);
    cart = await get('SELECT * FROM carts WHERE user_id = ? AND status = "active"', [userId]);
  }
  return cart;
}

router.get('/', authRequired, async (req, res) => {
  const cart = await ensureActiveCart(req.user.id);
  const items = await all(`
    SELECT ci.id, ci.quantity, p.id as product_id, p.title, p.price, p.image
    FROM cart_items ci
    JOIN products p ON p.id = ci.product_id
    WHERE ci.cart_id = ?`, [cart.id]);
  res.json({ cartId: cart.id, items });
});

router.post('/add', authRequired, async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await ensureActiveCart(req.user.id);
  await run('INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)', [cart.id, productId, quantity || 1]);
  res.json({ ok: true });
});

router.post('/remove', authRequired, async (req, res) => {
  const { itemId } = req.body;
  await run('DELETE FROM cart_items WHERE id = ?', [itemId]);
  res.json({ ok: true });
});

export default router;
