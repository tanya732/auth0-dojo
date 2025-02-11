// Navbar.js
import React from 'react';
import '../styles/Navbar.css'; // Ensure this import is present
import auth0Logo from '../assets/auth0-logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={auth0Logo} alt="Auth0 Logo" className="auth0-logo" />
      <h1>Auth0-CodeLabs</h1>
    </header>
  );
};

export default Navbar;