import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/MovieSlice'
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = configureStore({
  reducer: {
   searchMovies : movieReducer,
  },
  composeWithDevTools
})