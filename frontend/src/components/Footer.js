import React from 'react';
import './Footer.css'; // External CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-right">
          <h2>CodeGuardian</h2>
          <p>&copy; {new Date().getFullYear()} CodeGuardian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
