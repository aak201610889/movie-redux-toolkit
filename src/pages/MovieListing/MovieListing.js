import React from 'react'
import { useSelector } from 'react-redux'
import { addMovies, Moviestate } from "../../redux/movies/moviesReducer";
import MovieCard from '../MovieCard/MovieCard'
function MovieListing() {
  let renderMovies=''
  const movies = useSelector(Moviestate);
 
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies_error">{movies.Error}</div>
    );
  
  return (<div className="movie_wrapper">
    <div className="movie_list">
      <h2>movies</h2>
      <div className="movie_container">
        {renderMovies}
      </div>
    </div>
  </div>
  )
}

export default MovieListing