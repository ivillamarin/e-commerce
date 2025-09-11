import { Link } from 'react-router-dom';
import './Home.css'; // Si usás estilos separados
import Navbar from "../components/NavBar/Navbar";

function Home() {
    return (
        
            <section className="home-container">
                <div className="hero">
                    <h1>El Zorzal Shop</h1>
                    <p>Desde hace más de 70 años confeccionamos alpargatas con el mismo oficio artesanal de siempre,</p>
                    <p>uniendo calidad, tradición y raíces.</p>
                    <Link to="/catalogo">
                        <button className="btn-ver-productos">Ver catalogo</button>
                    </Link>
                    <Link to="/nosotros">
                        <button className="btn-ver-productos2">Nuestra historia</button>
                    </Link>
                </div>
            </section>
        
    );
}

export default Home;