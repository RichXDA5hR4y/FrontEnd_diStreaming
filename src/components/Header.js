// src/components/Header.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  // Cek status login
  const isAuth = localStorage.getItem('isAuth');

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  return (
    <header className="header">
      {/* Logo diStreaming klik balik ke Home */}
      <h1><Link to="/" style={{textDecoration:'none', color:'#e50914'}}>diStreaming</Link></h1>
      
      <nav>
        <ul>
          {isAuth ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li>Movies</li> 
              <li onClick={handleLogout} style={{cursor: 'pointer', color: 'red', fontWeight: 'bold'}}>
                Logout
              </li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;