import { useEffect } from "react";
import { Api_Get_Options } from "../utils/utils";
import { useDispatch } from "react-redux";
import { setnowPlayingMovies } from "../redux/moviesSlice";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      Api_Get_Options
    )
      .then((res) => res.json())
      .then((res) => dispatch(setnowPlayingMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
};

export default useNowplayingMovies;
