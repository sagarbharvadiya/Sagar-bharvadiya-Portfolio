import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Sagar</Link>
      </div>
      <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button className="header__toggle" onClick={toggleNav}>
        <span className="header__toggle-icon"></span>
      </button>
    </header>
  );
}

export default Header;
