import { RESTAURANTS_URL } from "../utils/constants";

export const fetchRestaurants = async () => {
  const restaurants = await fetch(RESTAURANTS_URL)
  .then((response) => response.json())
  .then((data) => data);

//   console.log(restaurants);
  return restaurants;
};
