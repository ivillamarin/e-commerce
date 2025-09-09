import { Link } from 'react-router-dom';
import './Home.css'; // Si usás estilos separados
import Navbar from "../components/NavBar/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <section className="home-container">
                <div className="hero">
                    <h1>El Zorzal Shop</h1>
                    <p>Desde el corazón del pueblo, tejemos tradición paso a paso.</p>
                    <Link to="/catalogo">
                        <button className="btn-ver-productos">Ver productos</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Home;