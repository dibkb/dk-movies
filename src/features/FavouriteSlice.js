import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies : []
}

export const favouriteSlice = createSlice({
  name: 'favMovies',
  initialState,
  reducers: {
     addFavMovies : (state,action) =>{
        const newID = action.payload.imdbID;
        state.movies.push(action.payload);
      //   console.log(state.favouriteSlice.movies);

     }
  },
})

// Action creators are generated for each case reducer function
export const { addFavMovies } = favouriteSlice.actions

export default favouriteSlice.reducer;