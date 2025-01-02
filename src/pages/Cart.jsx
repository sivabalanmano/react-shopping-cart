import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTail from "../components/cart-tail";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart, totalPrice);
  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
    <div>
      {cart && cart.length ? (
        <>
        <div>
          <div  >
            <h1 className="font-bold text-lg text-red-800">Your Cart Summery</h1>
            <p>
              <span className="text-gray-800">Total Items</span>
              <span>: {cart.length}</span>
            </p>
            <p>
              <span className="text-gray-800">Total Amount</span>
              <span>: ${totalPrice}</span>
            </p>
          </div>
        </div>
         <div >
          <div>
           {
             cart.map(cartItem=><CartTail key={cartItem.id} cartItem={cartItem}/>)
           }
         </div>
         </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart Is Empty
            <Link to={"/"}>
              <button className="bg-red-950 text-white border-2 rounded-lg font-semibold p-4 hover:bg-gradient-to-r from-red-950 to-red-700">
                Shop Now
              </button>
            </Link>
          </h1>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
