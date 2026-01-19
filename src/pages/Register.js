import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          username, 
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registrasi berhasil! Silakan login.');
        navigate('/login');
      } else {
        // Ambil pesan error pertama dari respons
        const firstError = data.errors
          ? Object.values(data.errors)[0][0]
          : data.message || 'Terjadi kesalahan saat registrasi.';
        setError(firstError);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Gagal terhubung ke server. Cek koneksi internet Anda.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register Member Baru</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Daftar</button>
      </form>
      <p>Sudah punya akun? <a href="/login">Login di sini</a></p>
    </div>
  );
};

export default Register;