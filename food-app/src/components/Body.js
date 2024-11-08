import RestaurantCard from "./RestaurantCard";
import restaurantsMockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState(restaurantsMockData);
    return (
      <div className="body">
          <div className="search-container">
              <input className="search-input"/>
              <button className="search-button">Search</button>
          </div>
          <h1>Welcome to the Food App!</h1>
          <button onClick={()=>{
            let filteredList = restaurantsList.filter(restaurant => restaurant.info.avgRating > 4);
            setRestaurantsList(filteredList);
          }}>Top rated restaurants</button>
          <div className="restaurant-container">
              {
                  restaurantsList.map((restaurant)=>{
                      return <RestaurantCard key={restaurant.info.id} restaurantDetails = {restaurant.info}/>
                  })
              }            
          </div>
      </div>
    );
  };

export default Body;