import express from 'express';

const router = express.Router();
let carrito = [];

router.get('/', (req, res) => {
    res.json(carrito);
});

router.post('/agregar', (req, res) => {
    const producto = req.body;
    carrito.push(producto);
    res.json({ mensaje: 'Producto agregado al carrito', carrito });
});

router.delete('/eliminar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    carrito = carrito.filter(p => p.id !== id);
    res.json({ mensaje: 'Producto eliminado del carrito', carrito });
});

export default router;