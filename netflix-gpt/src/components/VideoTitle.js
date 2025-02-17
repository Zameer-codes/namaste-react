import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="p-4 absolute bg-gradient-to-r from-black w-screen h-full aspect-video pt-60 pl-4 md:pl-14">
      <h1 className="font-bold text-lg md:text-4xl mb-4 text-white">{title}</h1>
      <p className="w-1/4 mb-8 hidden md:block text-white">{overview}</p>
      <button className="bg-white p-1 px-4 md:px-8 rounded-lg text-black text-md md:text-lg mr-2 hover:opacity-85 md:mb-0 mb-12">
        {">"} Play
      </button>
      <button className="hidden md:inline bg-gray-500 p-2 px-8 rounded-lg text-white text-lg">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
