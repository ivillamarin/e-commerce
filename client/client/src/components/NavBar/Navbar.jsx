import { Link } from 'react-router-dom';
import './Navbar.css'; // Opcional para estilos separados

function Navbar() {
return (
    <nav className="navbar">
        <h2 className="logo">El Zorzal</h2>
        <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
        </ul>
    </nav>
);
}

export default Navbar;