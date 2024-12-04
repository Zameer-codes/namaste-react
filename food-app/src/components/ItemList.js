import { Food_ITEM_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import { addToCart } from "../utils/redux/cartSlice";

const ItemList = (props) => {
  const { category, showItems, setShowItems } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowItems();
  };

  const handleAddToCart = (item) =>{
    dispatch(addToCart(item));
  }

  return (
    <div className="mb-6 p-4 border-b-2 bg-slate-100 rounded-md shadow-lg">
      <div
        className="flex justify-between pr-4 cursor-pointer text-md"
        onClick={handleClick}
      >
        <h2 className="font-bold text-lg">
          {category.card?.card?.title} ({category.card?.card?.itemCards.length})
        </h2>
        <span>🔻</span>
      </div>
      {showItems &&
        category.card?.card?.itemCards.map((item) => {
          const { id, name, price, imageId, description } = item?.card?.info;
          return (
            <div
              key={id}
              className="bg-slate-50 my-4 flex justify-between px-6 py-4"
            >
              <div className="w-9/12 px-2">
                <h3 className=" mb-4">
                  {name} - Rs. {price / 100}/-
                </h3>
                <p className="text-slate-500 text-xs">{description}</p>
              </div>
              <div className="relative">
                <div
                  onClick={() => handleAddToCart(item)}
                  className="absolute bg-amber-500 text-white px-2 py-1 flex justify-center left-1/4 top-3/4 cursor-pointer rounded-lg transform transition-transform duration-300 hover:scale-110 hover:translate-z-2"
                >
                  Add +
                </div>
                {imageId ? (
                  <img
                    src={Food_ITEM_URL + imageId}
                    className="w-32 h-24 rounded-lg"
                  />
                ) : (
                  <p className="flex items-center justify-center text-white w-24 h-10 bg-slate-300 rounded-md">
                    No image
                  </p>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
