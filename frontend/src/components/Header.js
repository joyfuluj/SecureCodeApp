import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="logo"><img src="/logo2.png" alt="Logo" /></div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
        </ul>
        <img src="./user_icon.png" className="user_image"></img>
      </nav>
    </header>
  );
}

export default Header;
