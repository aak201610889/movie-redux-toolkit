import React, { useEffect } from "react";
import "./Home.css";
import MovieApi from "../../apis/movieApi";
import { APIKey } from "../../apis/MovieApiKey";
import { useDispatch } from "react-redux";
import {addMovies} from '../../redux/movies/moviesReducer'
import MovieListing from "../MovieListing/MovieListing";

function Home() {
  const movieText = "harry";
  const dispatch = useDispatch();
 


  useEffect(() => {
    const fetchMovies = async () => {
      const res = await MovieApi.get(
        `/?apikey=${APIKey} &s=${movieText}&type=movie`
      ).catch((err) => console.log("err is", err));
      dispatch(addMovies(res.data));
      console.log(res.data.Search);
    };
    fetchMovies()
  }, []);

  return <div className="home">
   <MovieListing/>
  </div>;
}

export default Home;
