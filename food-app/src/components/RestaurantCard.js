import { FOOD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantDetails} = props;
    const {name, cuisines, cloudinaryImageId, areaName, locality, avgRatingString} = restaurantDetails;
    return(
        <div className="restaurant-card">
            <img className="food-image" src={FOOD_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{avgRatingString}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{locality +", "+ areaName}</p>
        </div>
    )
}

export default RestaurantCard;