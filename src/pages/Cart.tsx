import { useEffect, useState } from "react";
import { CartItem, Title } from "../components";
import useShopContext from "../hooks/useShopContext";

const Cart = () => {
  const { currency, deliveryFee, cartItems: initialCartItems, setCartItems: setInitialCartItems } = useShopContext();
  
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    setInitialCartItems(cartItems); // Reset the initial cart items after each update
  }, [cartItems]);

  const handleQuantityChange = (productId:string , quantity:number, size:string) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product._id === productId && item.size === size) {
        return { ...item, quantity: quantity };
      }
      return item;
    })
    setCartItems(updatedCartItems);
  }

  const cartItemsPrice = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col gap-8">
        <div>
          <Title text1="YOUR" text2="CART" />
        </div>
        <CartItem cartItems={cartItems} onQuantityChange={handleQuantityChange} currency={currency}/>
      </div>
      <div className="w-full flex flex-col items-end mt-10 ">
        <div className="max-w-sm w-full flex flex-col gap-5 ">
          <div>
            <Title text1="CART" text2="ITEMS" />
          </div>
          <div className="text-sm flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p>
                {currency}
                {cartItemsPrice.toFixed(2)}
              </p>
            </div>
            <hr className="text-mdGray opacity-70" />
            <div className="flex justify-between items-center">
              <p>Delivery Fees</p>
              <p>
                {currency}
                {deliveryFee.toFixed(2)}
              </p>
            </div>
            <hr className="text-mdGray opacity-70" />
            <div className="flex justify-between items-center">
              <p className="font-semibold">Total</p>
              <p>
                {currency}
                {(cartItemsPrice + deliveryFee).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-black w-fit px-6 py-3 text-white text-xs cursor-pointer active:bg-gray"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
