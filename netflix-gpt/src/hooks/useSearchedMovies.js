import { useDispatch } from "react-redux";
import { Api_Get_Options } from "../utils/utils";
import { useEffect } from "react";
import { setSearchedMovies } from "../redux/gptSearchSlice";

const fetchMovies = async (movieName) => {
  const response = fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
    Api_Get_Options
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((err) => console.error(err));

  return response;
};

const useSearchedMovies = (movieNames) => {
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all(movieNames.map((movieName) => fetchMovies(movieName))).then(
      (movies) => dispatch(setSearchedMovies(movies))
    );
  }, []);
};

export default useSearchedMovies;
