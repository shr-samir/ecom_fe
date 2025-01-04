import React, { createContext, ReactNode, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export interface Product {
  _id: string;
  image: string[];
  name: string;
  price: number;
  bestseller: boolean;
  category: string;
  subCategory: string;
  description: string;
  sizes: string[];
  date: number;
}

export interface ShopContextType {
  products: Product[];
  currency: string;
  deliveryFee: number;
  searchText: string;
  showSearchBar: boolean;
  setSearchText: (text: string) => void;
  setShowSearchBar: (show: boolean) => void;
  addToCart: (productId: string, size: string) => void;
  cartItems: CartItemProps[];
  setCartItems: (cartItems: CartItemProps[]) => void;
}

export interface CartItemProps {
  product: Product;
  size: string;
  quantity: number;
}
interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const currency = "Rs. ";
  const deliveryFee = 10;

  const [searchText, setSearchText] = useState(""); // value inside search bar
  const [showSearchBar, setShowSearchBar] = useState(false); // to hide/show the search bar
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addToCart = (productId: string, size: string) => {
    let cartItemsCopy = structuredClone(cartItems);
    const product = products.find((item) => item._id === productId);
    if (product) {
      const existingCartItem = cartItemsCopy.find(
        (item) => item.product._id === productId && item.size === size
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        cartItemsCopy.push({ product, size, quantity: 1 });
      }
      setCartItems(cartItemsCopy);
    }
  };

  const value = {
    products,
    currency,
    deliveryFee,
    searchText,
    setSearchText,
    showSearchBar,
    setShowSearchBar,
    addToCart,
    cartItems,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
