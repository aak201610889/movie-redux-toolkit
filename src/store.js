import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./redux/movies/moviesReducer";

export const store = configureStore({
  reducer: {movies: moviesReducer},
  })

