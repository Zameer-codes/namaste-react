import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import CollectionContainer from "./CollectionContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div className="w-screen h-screen text-xs md:text-lg">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <CollectionContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
