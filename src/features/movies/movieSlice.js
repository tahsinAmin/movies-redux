import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  movies: [],
};
// Inside the reducers, we create actions, basically functional methods
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; // state.movies(name property of our movieslice).movies(property that we're trying to get)
export default movieSlice.reducer;
