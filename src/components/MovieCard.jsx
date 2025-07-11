import React from 'react';
import '../css/MovieCard.css'; 

function MovieCard({ movie }) {
  const favoriteMovieClick = () => {
    alert("Clicked");
  }
  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
          alt={movie.title}
        />
      </div>
      <div className='movie-favorite'>
        <button className='favorite-btn' onClick={favoriteMovieClick}>
          ♥
        </button>
      </div>
      <div className='movie-info'>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
              </div>
    </div>
  );
}

export default MovieCard;