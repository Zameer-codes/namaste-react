import { Food_ITEM_URL } from "../utils/constants";

const CartItem = (props) => {
  const { item } = props;
  const { id, name, price, imageId, description } = item?.card?.info;
  return (
    <div data-testid="cartItem" key={id} className="bg-slate-50 my-4 flex justify-between px-6 py-4">
      <div className="w-9/12 px-2">
        <h3 className=" mb-4">
          {name} - Rs. {price / 100}/-
        </h3>
        <p className="text-slate-500 text-xs">{description}</p>
      </div>
      <div className="relative">
        {imageId ? (
          <img src={Food_ITEM_URL + imageId} className="w-32 h-24 rounded-lg" />
        ) : (
          <p className="flex items-center justify-center text-white w-24 h-10 bg-slate-300 rounded-md">
            No image
          </p>
        )}
      </div>
    </div>
  );
};

export default CartItem;