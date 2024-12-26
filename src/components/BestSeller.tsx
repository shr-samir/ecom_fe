import { useEffect, useState } from "react";
import { ProductItem, Title } from ".";
import { Product } from "../context/ShopContext";
import useShopContext from "../hooks/useShopContext";

const BestSeller = () => {
  // State
  const [bestSeller, setBestSeller] = useState<Product[]>([]);

  // custom hook
  const { products } = useShopContext();

  // Effects
  useEffect(() => {
    if (products) {
      const bestProduct = products.filter((product) => product.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-8 flex flex-col">
      <div className="text-center py-4 flex flex-col gap-4">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-1/2 m-auto text-xs sm:text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          velit quod ducimus sapiente doloribus sunt.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
