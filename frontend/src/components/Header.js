import React from 'react';
import './Header.css'; // Add custom CSS if needed

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="logo"><img src="/logo2.png" alt="Logo" /></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sample codes</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
