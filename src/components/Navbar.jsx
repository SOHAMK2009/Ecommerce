import { useState } from 'react';
import { useStore } from '../context/StoreContext';

function Navbar({ currentPage, onNavigate }) {
  const { cartCount } = useStore();
  const links = ['Home', 'Account', 'Orders', 'Cart', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, link) => {
    e.preventDefault();
    onNavigate(link.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleClick(e, 'Home')}
        >
          VELOCE
        </a>

        <ul className="navbar__links">
          {links.map((link) => {
            const isActive = currentPage === link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                  onClick={(e) => handleClick(e, link)}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="navbar__menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <a
          href="#cart"
          className="navbar__cart"
          aria-label={`Cart with ${cartCount} items`}
          onClick={(e) => handleClick(e, 'Cart')}
        >
          <svg
            className="navbar__cart-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M6 6h15l-1.5 9h-12L6 6z" />
            <path d="M6 6L5 3H2" />
            <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
        </a>
      </div>

      {menuOpen && (
        <ul className="navbar__mobile-menu">
          {links.map((link) => {
            const isActive = currentPage === link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                  onClick={(e) => handleClick(e, link)}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
