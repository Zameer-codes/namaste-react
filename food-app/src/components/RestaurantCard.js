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
      <img
        className="rounded-lg h-52 w-full"
        src={FOOD_URL + cloudinaryImageId}
      />
      <div className="p-4 text-sm">
        <h3 className="font-bold text-lg text-ellipsis overflow-hidden whitespace-nowrap">
          {name}
        </h3>
        <p>⭐ {avgRatingString}</p>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap text-slate-500">
          {cuisines.join(", ")}
        </p>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap text-slate-500">
          {locality + ", " + areaName}
        </p>
      </div>
    </div>
  );
};

export const withAvailabilityLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className={`absolute text-white px-2 py-1 rounded-tl-lg ${props.restaurantDetails.isOpen?"bg-green-500":"bg-red-400"}`}>{props.restaurantDetails.isOpen?"Open":"Close"}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
