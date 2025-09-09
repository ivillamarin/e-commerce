import './nosotros.css';

function Nosotros() {
return (
    <section className="nosotros-container">
    <div className="nosotros-texto">
        <h2>Sobre nosotros</h2>
        <p>
            En El Zorzal Shop creemos en la fuerza de lo hecho a mano. Cada pieza que ofrecemos nace de una historia, de un oficio transmitido con cariño, y de materiales que respetan la tierra.
        </p>
        <p>
            Somos un equipo de artesanos, diseñadores y soñadores que buscan unir tradición y modernidad. Nuestro compromiso es ofrecer productos que no solo sean útiles, sino que también cuenten algo: tu historia, la nuestra, la de quienes nos inspiran.
        </p>
    </div>
    <div className="nosotros-imagen">
        <img src="/taller.jpg" alt="Nuestro taller" />
    </div>
    </section>
);
}

export default Nosotros;