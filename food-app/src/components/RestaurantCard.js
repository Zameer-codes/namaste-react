import { FOOD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantDetails } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    locality,
    avgRatingString,
  } = restaurantDetails;
  return (
    <div className="w-[250px] hover:bg-slate-300 rounded-lg">
      <img className="rounded-lg h-52 w-full" src={FOOD_URL + cloudinaryImageId} />
      <div className="p-4 text-sm">
        <h3 className="font-bold text-lg text-ellipsis overflow-hidden whitespace-nowrap">{name}</h3>
        <p>⭐ {avgRatingString}</p>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap text-slate-500">{cuisines.join(", ")}</p>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap text-slate-500">{locality + ", " + areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
