// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cek auth saat komponen mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuth');
    setIsAuthenticated(!!authStatus); // true jika ada nilainya
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: '#e50914' }}>
          diStreaming
        </Link>
      </h1>
      
      <nav>
        <ul>
          {isAuthenticated ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li>Movies</li> 
              <li 
                onClick={handleLogout} 
                style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold' }}
              >
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