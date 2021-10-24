import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const favouriteSlice = createSlice({
  name: "favMovies",
  initialState,
  reducers: {
    addFavMovies: (state, action) => {
      // const newID = action.payload.imdbID;
      state.movies.push(action.payload);
      //   console.log(state.favouriteSlice.movies);
    },
    removeFavMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      //   console.log(state.favouriteSlice.movies);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavMovies, removeFavMovie } = favouriteSlice.actions;

export default favouriteSlice.reducer;
