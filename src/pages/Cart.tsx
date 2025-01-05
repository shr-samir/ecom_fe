import { useEffect, useState } from "react";
import { CartItem, CartTotal, Title } from "../components";
import useShopContext from "../hooks/useShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    currency,
    deliveryFee,
    cartItems: initialCartItems,
    setCartItems: setInitialCartItems,
    cartItemsPrice
  } = useShopContext();

  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    setInitialCartItems(cartItems); // Reset the initial cart items after each update
  }, [cartItems]);

  const handleQuantityChange = (
    productId: string,
    quantity: number,
    size: string
  ) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product._id === productId && item.size === size) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  

  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col gap-8">
        <div>
          <Title text1="YOUR" text2="CART" />
        </div>
        <CartItem
          cartItems={cartItems}
          onQuantityChange={handleQuantityChange}
          currency={currency}
        />
      </div>
      <div className="w-full flex flex-col items-end mt-10 ">
        <div className="max-w-sm w-full flex flex-col gap-5 ">
          <div>
            <Title text1="CART" text2="ITEMS" />
          </div>
          <CartTotal currency={currency} cartItemsPrice={cartItemsPrice} deliveryFee={deliveryFee}/>
          <div className="w-full flex justify-end">
            <Link to="/place-order">
              <button
                type="submit"
                className="bg-black w-fit px-6 py-3 text-white text-xs cursor-pointer active:bg-gray"
              >
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
