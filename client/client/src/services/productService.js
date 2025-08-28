// src/services/productService.js
export async function fetchProducts() {
try {
    const response = await fetch('http://localhost:5173/api/products'); // ajustá la URL si es distinta
    if (!response.ok) throw new Error('Error al obtener productos');
    return await response.json();
} catch (error) {
    console.error('Error en fetchProducts:', error);
    return [];
}
}