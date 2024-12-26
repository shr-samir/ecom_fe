import { useContext } from "react";
import { ShopContext, ShopContextType } from "../context/ShopContext";

// custom hook for solving the problem of checking if ShopContext is undefined for each component.
const useShopContext = (): ShopContextType => {
  const shopContext = useContext(ShopContext);
  if (!shopContext) throw new Error("ShopContext is not found");
  return shopContext;
};

export default useShopContext;
