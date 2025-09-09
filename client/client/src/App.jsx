import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Cart from './components/cart/cart'; // Si querés usarlo en Carrito.jsx
import ProductDetails from './pages/productDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/producto/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}


export default App;
