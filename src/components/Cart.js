import React from "react";
import appStore from "../store/appStore";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  //console.log("cartItems:", cartItems);
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-2 p-2">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h3>No Items in your cart!</h3>}
        <ItemList items={cartItems} page="cart" />
      </div>
    </div>
  );
};

export default Cart;
