import React, { useEffect, useState } from "react";
import { Api_Get_Options } from "../utils/utils";

const VideoBackground = ({ movie_id }) => {
  const [trailer, setTrailer] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      Api_Get_Options
    )
      .then((res) => res.json())
      .then((res) => {
        const filteredVideos = res.results.filter(
          (video) => video.type === "Trailer"
        );
        setTrailer(filteredVideos.length ? filteredVideos[0] : res.results[0]);
      })
      .catch((err) => console.error(err));
  });
  return (
    <div>
      {trailer && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?&autoplay=1&mute=1`}
          title={trailer.id}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
