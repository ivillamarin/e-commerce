import './contacto.css';

function Contacto() {
return (
    <section className="contacto-container">
        <h2>Contacto</h2>
        <form className="formulario-contacto">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button type="submit">Enviar</button>
        </form>
        <div className="contacto-redes">
        <p>También podés encontrarnos en:</p>
        <ul>
            <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
            <li><a href="https://wa.me/5491123456789" target="_blank">WhatsApp</a></li>
            <li><a href="mailto:contacto@elzorzalshop.com">Email</a></li>
        </ul>
        </div>
    </section>
    );
}

export default Contacto;