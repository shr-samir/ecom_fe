import { createContext, ReactNode, useState } from "react";
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
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const currency = "$";
  const deliveryFee = 10;

  const [searchText, setSearchText] = useState(""); // value inside search bar
  const [showSearchBar, setShowSearchBar] = useState(false); // to hide/show the search bar

  const value = {
    products,
    currency,
    deliveryFee,
    searchText,
    setSearchText,
    showSearchBar,
    setShowSearchBar,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
