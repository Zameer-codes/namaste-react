import { useEffect } from "react";
import { Api_Get_Options } from "../utils/utils";
import { useDispatch } from "react-redux";
import { settopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      Api_Get_Options
    )
      .then((res) => res.json())
      .then((res) => dispatch(settopRatedMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
};

export default useTopRatedMovies;
