import { movieRecommendationQuery } from "./utils";

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_APIKEY}`;

export const geminiApi = async (query) => {
  const data = {
    contents: [
      {
        parts: [{ text: movieRecommendationQuery(query) }],
      },
    ],
  };

  const Api_Options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = fetch(GEMINI_API_URL, Api_Options)
    .then((response) => response.json())
    .then((data) => data?.candidates[0]?.content?.parts[0]?.text);
  return response;
};
