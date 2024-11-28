import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Food_ITEM_URL, Menu_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";

const MenuCard = () => {
  const { resId } = useParams();

  const menu = useMenu(resId);

  if (menu === null || menu.length <= 0) return <Shimmer />;
  return (
    <div className="w-full">
        <h2 className="flex font-bold text-lg justify-center">Menu</h2>
      {menu &&
        menu.map((item) => {
          const { id, name, price, imageId, description } = item?.card?.info;
          return (
            <div key={id} className="bg-slate-100 my-4 flex justify-between px-6 py-4">
              <div>
                <h3 className="font-bold mb-4">{name}</h3>
                <p>Rs. {price/100}/-</p>
                <p className="text-slate-500">{description}</p>
              </div>
              {imageId ? (
                <img
                  src={Food_ITEM_URL + imageId}
                  className="w-32 rounded-lg"
                />
              ) : (
                <></>
              )}
            </div>
          );
        })}
    </div>
  );
};
export default MenuCard;
