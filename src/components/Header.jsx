/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const isDarkModeSaved = localStorage.getItem('darkMode');
    if (isDarkModeSaved) {
      setIsDarkMode(isDarkModeSaved === 'true');
      document.body.classList.toggle('dark-mode', isDarkModeSaved === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            Wilgner
          </a>
        </div>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? (
            <i className="bx bx-sun toggle__icon__dark-mode"></i>
          ) : (
            <i className='bx bxs-moon' ></i>
          )}
        </div>
        <div className={`nav__menu ${isMenuOpen ? "show" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Work Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
