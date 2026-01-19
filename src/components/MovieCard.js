import React from 'react';
import { Link } from 'react-router-dom'; // 1. Kita nambahin ini

const MovieCard = ({ movie }) => {
  // Logic warna rating
  const getRatingColor = (rating) => {
    if (rating >= 8) return 'green';
    if (rating >= 6) return 'orange';
    return 'red';
  };

  return (
    // 2. Kita bungkus semuanya pakai Link biar bisa diklik pindah halaman
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.imageUrl} alt={movie.title} 
               onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/500x750?text=No+Image"; }}
          />
          <div className="movie-overlay">
            <button className="play-btn">Lihat Detail</button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <div className="movie-meta">
            <span>{movie.year}</span>
            <span className={`rating ${getRatingColor(movie.rating)}`}>
              {movie.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;