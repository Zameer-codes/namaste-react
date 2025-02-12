import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import { useSelector } from "react-redux";

const MainContainer = () => {
  useNowplayingMovies();

  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  //early return if movies is undefined/null
  if (!movies) return;

  return (
    <div className="relative">
      <VideoTitle title={movies[0]?.title} overview={movies[0]?.overview} />
      <VideoBackground movie_id={movies[0]?.id} />
    </div>
  );
};

export default MainContainer;
