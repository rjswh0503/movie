import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?language=ko&region=kr&api_key=5704c5bb2dfd772259a3076e7be4a829'
      )
      .then((response) => {
        const movieData = response.data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            rating: movie.vote_average,
            overview: movie.overview,
            release_date: movie.release_date,
            video: movie.video,

            poster: `https://image.tmdb.org/t/p/w700${movie.poster_path}`,
        }));
        setMovies(movieData);
      })
      .catch((error) => {
        console.log('데이터 없음', error);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/detail/${movie.id}/credits`}>
          <img src={movie.poster} alt={movie.title}/>
          </Link>
          <p>{movie.overview}</p>
          <p>{movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;