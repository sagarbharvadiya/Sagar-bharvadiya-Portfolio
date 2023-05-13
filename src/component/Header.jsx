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
        <Link to="/">
          <h3>Sagar <span>Bharvadiya</span></h3>
        </Link>
      </div>
      <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            {/* <a
              href={process.env.REACT_APP_RESUME_LINK}
              target="_blank"
              rel="noreferrer"
            > */}
            <a
              href="https://drive.google.com/file/d/11vQi12XEAWdsnnAsvtm6RmfLdrmdJmwq/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="header__toggle" onClick={toggleNav}>
        <span className="header__toggle-icon">
          <div className="hamburger-menu">
            <div className="hamburger-menu-line"></div>
            <div className="hamburger-menu-line"></div>
            <div className="hamburger-menu-line"></div>
          </div>
        </span>
      </button>
    </header >
  );
}

export default Header;
