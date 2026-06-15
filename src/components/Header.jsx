import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import SearchOverlay from './SearchOverlay'

function HeaderIcon({ label, to, count, onClick, children }) {
  const content = <>{children}{count > 0 && <span className="header-badge">{count}</span>}</>
  return to
    ? <Link className="header-icon" to={to} aria-label={label}>{content}</Link>
    : <button className="header-icon" type="button" onClick={onClick} aria-label={label}>{content}</button>
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { count: cartCount } = useCart()
  const { count: wishlistCount } = useWishlist()
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <button
          className="menu-button"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <Link className="logo" to="/" onClick={closeMenu} aria-label="Caseo home">
          <img src="https://i.ibb.co/Z65h2RFj/logotranso.png" alt="Caseo / ქეისო" />
        </Link>
        <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/category/iphone-cases" onClick={closeMenu}>iPhone Cases</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
        <div className="header-actions">
          <HeaderIcon label="Search" onClick={() => setIsSearchOpen(true)}>
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>
          </HeaderIcon>
          <HeaderIcon label="Wishlist" to="/wishlist" count={wishlistCount}>
            <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>
          </HeaderIcon>
          <HeaderIcon label="Cart" to="/cart" count={cartCount}>
            <svg viewBox="0 0 24 24"><path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
          </HeaderIcon>
        </div>
      </div>
      {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
    </header>
  )
}

export default Header
