import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme, theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: theme.navbarBg,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#home"
          style={{ color: theme.navbarText }}
        >
          Challa Venkata Ravi Kiran Portfolio
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
          style={{ borderColor: theme.navbarText }}
        >
          <span 
            className="navbar-toggler-icon"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='${encodeURIComponent(
                theme.navbarText
              )}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
            }}
          />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Resume'].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link" 
                  href={`#${item.toLowerCase()}`}
                  style={{ color: theme.navbarText }}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
                style={{ color: theme.navbarText }}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
            
            <li className="nav-item ms-2">
              <button
                className="btn btn-link nav-link p-0 d-flex align-items-center"
                onClick={toggleTheme}
                style={{ color: theme.navbarText }}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <style>
        {`
          .navbar-nav .dropdown-menu {
            transition: background 0.2s;
          }
          .navbar-nav .dropdown:hover > .dropdown-menu,
          .navbar-nav .dropdown-menu.show {
            display: block;
            margin-top: 0;
          }
          .navbar-nav .dropdown-menu .social-link:hover {
            color: ${theme.primaryColor} !important;
          }
          .navbar-nav .nav-link.dropdown-toggle:hover {
            color: ${theme.primaryColor};
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
