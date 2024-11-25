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
    <div className="body">
      <div className="search-container">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <h1>Welcome to the Food App!</h1>
      <button
        onClick={() => {
          let filteredList = searchedRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setSearchedRestaurants(filteredList);
          setIsTopRated(true);
        }}
        className={isTopRated ? "is-top-rated" : ""}
      >
        Top rated restaurants
      </button>
      {isTopRated ? (
        <button onClick={() => setIsTopRated(false)}>X</button>
      ) : (
        <></>
      )}
      <div className="restaurant-container">
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
