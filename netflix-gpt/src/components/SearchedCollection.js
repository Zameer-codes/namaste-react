import React from "react";
import { useSelector } from "react-redux";
import useSearchedMovies from "../hooks/useSearchedMovies";
import MovieList from "./MovieList";

const SearchedCollection = () => {
  const aiMovieRecommendations = useSelector(
    (state) => state.gpt.aiMovieRecommendation
  );

  useSearchedMovies(aiMovieRecommendations);

  const searchedMovies = useSelector((state) => state.gpt.searchedMovies);

  return (
    <div className="flex flex-col h-2/3 bg-black mt-2">
      <header className="bg-gray-700 rounded-md w-40 ml-4 md:ml-14 p-4 mt-2 text-white">
        Search results
      </header>
      <div className="flex-grow relative md:overflow-y-scroll mt-8 bg-inherit">
        <div className="z-20">
          {searchedMovies &&
            searchedMovies.map((movie, index) => (
              <MovieList
                key={index}
                title={aiMovieRecommendations[index]}
                movies={movie}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchedCollection;
