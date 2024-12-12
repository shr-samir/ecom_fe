import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductItem, Title } from ".";
import { Product } from "../context/ShopContext";

const LatestCollection = () => {
  const shopContext = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState<Product[]>([]);

  if (!shopContext) {
    return <div className="flex justify-center items-center">Loading ...</div>;
  }

  useEffect(() => {
    if (shopContext?.products) setLatestProducts(shopContext.products.slice(0, 10));
  }, [shopContext]);

  

  // const products = shopContext;

  // console.log("Products: ", products);

  return (
    <div className="my-8 flex flex-col">
      <div className="text-center py-4 flex flex-col gap-4">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-1/2 m-auto text-xs sm:text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro iusto,
          nesciunt repellendus dignissimos dolorem rerum, veniam nobis illum
          praesentium architecto tempora modi minus cupiditate fugiat dolorum,
          neque quae delectus! Placeat.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
