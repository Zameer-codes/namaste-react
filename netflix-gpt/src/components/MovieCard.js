import React from "react";
import { TMDB_IMAGE_BASE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 mr-2">
      <img alt="Movie Poster" src={`${TMDB_IMAGE_BASE_URL}/${posterPath}`} />
    </div>
  );
};

export default MovieCard;
