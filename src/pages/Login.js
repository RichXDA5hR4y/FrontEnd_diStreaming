import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json',
         },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.data?.token) {
        // Simpan token ke localStorage
        localStorage.setItem('authToken', data.data.token);
        alert('Login berhasil! Selamat datang di diStreaming.');
        navigate('/');
      } else {
        setError(data.message || 'Email atau password salah.');
      }
    } catch (err) {
      setError('Gagal terhubung ke server. Cek koneksi internet Anda.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login diStreaming</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Masuk</button>
      </form>
      <p>Belum punya akun? <a href="/register">Daftar di sini</a></p>
    </div>
  );
};

export default Login;