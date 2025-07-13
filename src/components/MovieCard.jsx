import React from 'react';
import '../css/MovieCard.css'; 
import { useMovieContext } from '../context/MovieContext';

function MovieCard({ movie }) {

  const { addToFav, removeFromFav, isFav } = useMovieContext();
  const favorite = isFav(movie.id);

  const favoriteMovieClick = (e) => {
    e.preventDefault();
    if (favorite) removeFromFav(movie);
    else addToFav(movie);
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
        <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={favoriteMovieClick}>
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
