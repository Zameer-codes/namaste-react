import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";
import ItemList from "./ItemList";

const MenuCard = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(0);

  const menu = useMenu(resId);

  if (menu === null || menu.length <= 0) return <Shimmer />;

  const categories = menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="wx-screen flex flex-col items-center">
      <div className="my-8 bg-slate-200 p-4 rounded-lg shadow-lg">
        <h1 className="font-bold text-lg flex justify-center">
          {menu && menu[0].card?.card?.text}
        </h1>
      </div>
      <div className="w-6/12">
        {categories &&
          categories.map((category, index) => (
            <ItemList
              category={category}
              showItems={showItems === index}
              setShowItems={() => setShowItems(index)}
            />
          ))}
      </div>
    </div>
  );
};
export default MenuCard;
