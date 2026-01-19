// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]); // Data film dari API
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  // Fetch data dari API saat komponen mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://203.194.115.210:8007/api/movies');
        if (!response.ok) throw new Error('Gagal mengambil data film');
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          // Mapping data API ke format yang kompatibel dengan MovieCard
          const mappedMovies = result.data.map((movie) => ({
            id: movie.id,
            title: movie.title,
            year: movie.release_year,
            rating: movie.rating,
            // Gunakan thumbnail jika ada, fallback jika null
            imageUrl: movie.thumbnail || 'https://via.placeholder.com/500x750?text=No+Image',
            // Opsional: simpan desc & genre untuk detail nanti
            desc: movie.description,
            genre: movie.category?.category_name || 'Unknown',
          }));
          setMovies(mappedMovies);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        // Opsional: tampilkan notifikasi error ke UI
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Pagination logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="home-page" style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
        Memuat film...
      </div>
    );
  }

  return (
    <div className="home-page">
      <h2 className="section-title">Movies Collection</h2>

      {/* Grid Film */}
      <div className="movie-grid">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p style={{ color: 'white', gridColumn: '1 / -1', textAlign: 'center' }}>
            Tidak ada film tersedia.
          </p>
        )}
      </div>

      {/* Tombol Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;