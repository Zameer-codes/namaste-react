import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const CollectionContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector((state) => state.movies);
  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-64 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default CollectionContainer;
