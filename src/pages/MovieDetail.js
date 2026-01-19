// MovieDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`/api/movies/${id}`);
        if (!response.ok) throw new Error('Film tidak ditemukan');
        const result = await response.json();
        setMovie(result.data); // Sesuaikan dengan struktur respons API
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Memuat...</h2>;
  if (error) return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>{error}</h2>;
  if (!movie) return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Film tidak ditemukan!</h2>;

  // Mapping data API ke format yang digunakan di UI
  const mappedMovie = {
    id: movie.id,
    title: movie.title,
    year: movie.release_year,
    rating: movie.rating,
    genre: movie.category?.category_name || 'Unknown',
    desc: movie.description,
    imageUrl: movie.thumbnail || 'https://via.placeholder.com/500x750?text=No+Image',
  };

  return (
    <div className="movie-detail-container">
      <div className="detail-poster">
        <img 
          src={mappedMovie.imageUrl} 
          alt={mappedMovie.title} 
          onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/500x750?text=No+Image"; }}
        />
      </div>

      <div className="detail-info">
        <h1>{mappedMovie.title} ({mappedMovie.year})</h1>
        
        <div style={{ marginBottom: '20px', color: '#aaa' }}>
          <span>{mappedMovie.genre}</span>
          <span style={{ margin: '0 10px' }}>|</span>
          <span className="rating-badge">⭐ {mappedMovie.rating}</span>
        </div>

        <p className="description">
          {mappedMovie.desc}
        </p>
        
        <Link to="/" className="back-btn">⬅ Kembali ke Home</Link>
      </div>
    </div>
  );
};

export default MovieDetail;