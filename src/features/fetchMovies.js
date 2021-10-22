import movieApi from "../api/movieApi";
const apiKey = "6e6f66eb";
export const fetchMovies = async (search) => {
   const response = await movieApi
     .get(`?s=${search}&apikey=${apiKey}`)
     .catch((err) => {
       console.log("error", err);
     });
   // dispatch(addMovies(response.data.Search));
   return response.data;
 };