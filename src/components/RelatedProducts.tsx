import { useEffect, useState } from "react";
import useShopContext from "../hooks/useShopContext";
import { Product } from "../context/ShopContext";
import ProductItem from "./ProductItem";

interface RelatedProductsProps {
  id: string | undefined;
  category: string | undefined;
  subCategory: string | undefined;
}
const RelatedProducts: React.FC<RelatedProductsProps> = ({
  id,
  category,
  subCategory,
}) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const { products } = useShopContext();

  useEffect(() => {
    filterRelatedProducts();
  }, [category, subCategory, id]);

  const filterRelatedProducts = () => {
    const relatedProducts = products.filter(
      (item) => item.category === category && item.subCategory === subCategory && item._id !== id
    );
    setRelatedProducts(relatedProducts);
  };

  return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">{
    relatedProducts.map((item) => (
      <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price}/>
    ))
  }</div>;
};

export default RelatedProducts;
