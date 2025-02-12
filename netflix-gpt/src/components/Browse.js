import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import CollectionContainer from "./CollectionContainer";

const Browse = () => {
  return (
    <div className="w-screen">
      <Header />
      <MainContainer />
      <CollectionContainer />
    </div>
  );
};

export default Browse;
