import { useCart } from '../context/cartContext';
import ProductCard from '../components/productCard/indexCard';
import './Catalogo.css';

function Catalogo() {
const { agregarProducto } = useCart();

const productos = [
    {
    id: 1,
        nombre: 'Alpargata Clásica',
        precio: 3500,
        imagen: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        nombre: 'Bolso de Lona',
        precio: 5800,
        imagen: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        nombre: 'Camisa de Lino',
        precio: 7200,
        imagen: 'https://via.placeholder.com/150'
    }
];

return (
    <section className="catalogo">
        <h2>Catálogo</h2>
        <div className="productos-grid">
        {productos.map(producto => (
            <ProductCard
            key={producto.id}
            producto={producto}
            onAgregar={() => agregarProducto(producto)}
        />
        ))}
    </div>
    </section>
);
}

export default Catalogo;