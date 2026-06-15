import { Link } from 'react-router-dom'
import { contact } from '../config'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div>
          <Link className="logo logo--light" to="/">
            <img src="https://i.ibb.co/Z65h2RFj/logotranso.png" alt="Caseo / ქეისო" />
          </Link>
          <p>Phone cases and accessories selected for style, protection, and everyday use.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/products">All products</Link>
          <Link to="/category/iphone-cases">iPhone cases</Link>
          <Link to="/category/accessories">Accessories</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={contact.facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="container footer__bottom">© {new Date().getFullYear()} Caseo / ქეისო</div>
    </footer>
  )
}

export default Footer
