import { createSlice } from "@reduxjs/toolkit";
export const moviesReducer =createSlice( {
  name: "movies",
  initialState: {
    movies: {},
  },
  reducers: {
    addMovies: (state, {payload}) => {
      state.movies = payload;
    }
  }  
})
export const { addMovies } = moviesReducer.actions;
export const Moviestate = state => state.movies.movies;
export default moviesReducer.reducer;