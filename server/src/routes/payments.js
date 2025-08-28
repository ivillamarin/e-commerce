import express from "express";
import mercadopago, { Preference } from "mercadopago";

const router = express.Router();

// Inicializar cliente de Mercado Pago con el token de entorno
const mp = new mercadopago.MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

// Endpoint para crear preferencia de pago
router.post("/create_preference", async (req, res) => {
  try {
    const preference = new Preference(mp);

    const result = await preference.create({
      body: {
        items: [
          {
            title: req.body.title || "Producto de prueba",
            quantity: Number(req.body.quantity) || 1,
            unit_price: Number(req.body.price) || 100,
          },
        ],
        back_urls: {
          success: "http://localhost:5173/success",
          failure: "http://localhost:5173/failure",
          pending: "http://localhost:5173/pending",
        },
        auto_return: "approved",
      },
    });

    res.json({ id: result.id });
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    res.status(500).json({ error: "Error al crear la preferencia" });
  }
});

export default router;

