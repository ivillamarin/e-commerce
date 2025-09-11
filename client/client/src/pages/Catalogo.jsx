import { useCart } from '../context/cartContext';
import ProductCard from '../components/productCard/indexCard';
import './Catalogo.css';
import { useState, useEffect } from 'react';

function Catalogo() {
const { agregarProducto } = useCart();
const [productos, setProductos] = useState([]);

useEffect(() => {
    const cargarProductos = async () =>  {
    try {
        const res = await fetch('/api/productos');
        const data = await res.json();
        setProductos(data);
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
    }

    cargarProductos();
}, []);

return (
    <div className="catalogo">
        <h2>Catálogo</h2>
    <div className="catalogo-products-grid">
        {productos.length === 0 ? (
        <p>Cargando productos...</p>
        ) : (
        productos.map((producto) => (
            <ProductCard
                key={producto.id}
                producto={producto}
                onAgregar={() => agregarProducto(producto)}
            />
        ))
        )}
    </div>
</div>
);
}

export default Catalogo;
