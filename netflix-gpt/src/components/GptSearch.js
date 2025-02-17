import React, { useRef } from "react";
// import OpenAi from "../utils/openai";
// import { movieRecommendationQuery } from "../utils/utils";
import { geminiApi } from "../utils/geminiApi";
import { useDispatch, useSelector } from "react-redux";
import { setAiMovieRecommendation } from "../redux/gptSearchSlice";
import SearchedCollection from "./SearchedCollection";

const GptSearch = () => {
  const searchValue = useRef(null);
  const dispatch = useDispatch();
  const aiMovieRecommendations = useSelector(
    (state) => state.gpt.aiMovieRecommendation
  );

  const handleGptSearch = async () => {
    //     const chatCompletion = await OpenAi.chat.completions.create({
    //       messages: [
    //         {
    //           role: "user",
    //           content: movieRecommendationQuery(searchValue.current.value),
    //         },
    //       ],
    //       model: "gpt-3.5-turbo",
    //     });

    //     console.log(chatCompletion);

    const response = await geminiApi(searchValue.current.value);
    const movieNames = response.split(",");
    dispatch(setAiMovieRecommendation(movieNames));
  };

  return (
    <div className="w-screen h-screen relative overflow-y-scroll object-cover bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg)]">
      <div className=" h-full bg-black bg-opacity-70">
        <div className="flex items-center pt-40">
          <div className=" w-full md:w-[50%] flex flex-col bg-white rounded-lg mx-4 md:mx-auto">
            <div className=" grid grid-cols-12 p-2 ">
              <input
                ref={searchValue}
                className="col-span-9 bg-gray-300 mr-2 p-2 rounded-lg"
                placeholder="What do you want to search today?"
              />
              <button
                className="col-span-3 bg-red-600 text-white p-2 px-4 rounded-lg"
                onClick={handleGptSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {aiMovieRecommendations && <SearchedCollection />}
      </div>
    </div>
  );
};

export default GptSearch;
