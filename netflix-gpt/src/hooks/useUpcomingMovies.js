import { useEffect } from "react";
import { Api_Get_Options } from "../utils/utils";
import { useDispatch } from "react-redux";
import { setupcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      Api_Get_Options
    )
      .then((res) => res.json())
      .then((res) => dispatch(setupcomingMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
};

export default useUpcomingMovies;
