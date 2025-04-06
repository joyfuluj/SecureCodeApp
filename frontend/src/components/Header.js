import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="logo"><img src="/logo2.png" alt="Logo" /></div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/sample">Sample codes</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
