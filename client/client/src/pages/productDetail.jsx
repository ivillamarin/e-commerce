import { useParams } from 'react-router-dom';
import './productDetails.css';

function ProductDetails() {
const { id } = useParams();

  // Simulación de productos (en producción, esto vendría del backend o contexto)
const productos = [
    {
        id: '1',
        nombre: 'Alpargata Clásica',
        precio: 3500,
        descripcion: 'Hecha a mano con lona natural y suela de yute.',
        imagen: 'https://via.placeholder.com/300'
    },
    {
        id: '2',
        nombre: 'Bolso de Lona',
        precio: 5800,
        descripcion: 'Resistente, amplio y con detalles en cuero vegetal.',
        imagen: 'https://via.placeholder.com/300'
    },
    {
        id: '3',
        nombre: 'Camisa de Lino',
        precio: 7200,
        descripcion: 'Fresca, elegante y confeccionada con lino argentino.',
        imagen: 'https://via.placeholder.com/300'
    }
];

const producto = productos.find(p => p.id === id);

if (!producto) {
    return <p>Producto no encontrado.</p>;
}

return (
    <section className="detalle-producto">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="detalle-info">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p className="precio">${producto.precio}</p>
        </div>
    </section>
);
}

export default ProductDetails;