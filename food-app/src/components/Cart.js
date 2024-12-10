import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {   
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 mx-auto">
      <h1 className="text-center my-6 font-bold text-xl bg-slate-500 text-white p-2 rounded-md flex justify-between">
        <h1 className="flex-grow text-center">Cart</h1>
        <h6 data-testid="clearCart" className="ml-auto text-sm bg-slate-100 p-2 rounded-md relative group hover:cursor-pointer" onClick={handleClearCart}>
          🗑
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 text-xs bg-black text-white rounded px-2 py-1 transition-opacity">
            Clear
          </span>
        </h6>
      </h1>
      {cartItems &&
        cartItems.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
    </div>
  );
};

export default Cart;
