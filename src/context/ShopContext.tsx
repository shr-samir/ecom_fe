import { createContext, ReactNode } from "react";
import { products } from "../assets/frontend_assets/assets";

export interface Product {
  _id: string;
  image: string[];
  name: string;
  price: number;
  bestseller: boolean;
  category: string;
  subCategory: string;
}

interface ShopContextType {
  products: Product[];
  currency: string;
  deliveryFee: number;
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

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
