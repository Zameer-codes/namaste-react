import RestaurantCard from "./RestaurantCard";
import restaurantsMockData from "../utils/mockData";
import { useEffect, useState } from "react";
import { fetchRestaurants } from "../api/api";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);

  const handleSearch = () => {
    console.log(searchText);

    const filteredRastaurants = restaurantsList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedRestaurants(filteredRastaurants);
  };

  useEffect(() => {
    if (!isTopRated) setSearchedRestaurants(restaurantsList);
  }, [isTopRated]);

  useEffect(() => {
    const getRestaurantsList = async () => {
      const json = await fetchRestaurants();
      const restaurants =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurantsList(restaurants);
      setSearchedRestaurants(restaurants);
    };
    getRestaurantsList();
  }, []);

  if(restaurantsList.length <= 0) return <Shimmer/>

  return (
    <div className="w-[100%]">
      <div className="flex justify-center mt-8">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="w-80 mr-4 h-10 rounded-lg hover:border-blue-300 border focus:ring  p-4"
        />
        <button onClick={handleSearch} className="rounded-lg bg-blue-400 px-4 text-slate-100">
          Search
        </button>
      </div>
      <h1 className="flex my-6 text-lg justify-center">Welcome to the Food App!</h1>
      <button
        onClick={() => {
          let filteredList = searchedRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setSearchedRestaurants(filteredList);
          setIsTopRated(true);
        }}
        className={`h-8 border border-slate-300 text-slate-800 px-4 ml-4 rounded-lg ${isTopRated?"bg-red-400 text-white":""}`}
      >
        Top rated restaurants
      </button>
      {isTopRated ? (
        <button onClick={() => setIsTopRated(false)} className="border bg-slate-300 rounded-md px-2 ml-2">X</button>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap gap-4 mt-6 mx-4 overflow-scroll-auto">
        {searchedRestaurants &&
          searchedRestaurants.map((restaurant) => {
            return (
              <Link to = {"/menu/"+restaurant?.info?.id} key={restaurant.info.id} className="menu-item-link">
                <RestaurantCard
                  restaurantDetails={restaurant.info}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
