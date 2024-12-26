// import useShopContext from "../hooks/useShopContext";

import { useState, useEffect } from "react";
import { DetailedProductItem, RelatedProducts, Title } from "../components";
import useShopContext from "../hooks/useShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const ratingsCount = 122;
  const [isReviewsOpen, setIsReviewsOpes] = useState(false);
  const [category, setCategory] = useState<string | undefined>("");
  const [subCategory, setSubCategory] = useState<string | undefined>("");

  const { productId } = useParams();
  const { products } = useShopContext();

  useEffect(() => {
    fetchRelatedCriterias();
  }, [productId]);

  const fetchRelatedCriterias = () => {
    const product = products.find((item) => item._id === productId);
    setCategory(product?.category);
    setSubCategory(product?.subCategory);
  };



  return (
    <div className="my-10 flex flex-col gap-14">
      <DetailedProductItem />
      <div className="flex flex-col text-sm">
        <div className="flex">
          <div
            className={`border border-gray border-opacity-50 px-5 py-3 border-b-0 cursor-pointer ${
              isReviewsOpen ? "" : "font-semibold"
            }`}
            onClick={() => setIsReviewsOpes(false)}
          >
            Description
          </div>
          <div
            className={`border border-gray border-opacity-50 px-5 py-3 border-l-0 border-b-0 cursor-pointer ${
              isReviewsOpen ? "font-semibold" : ""
            }`}
            onClick={() => setIsReviewsOpes(true)}
          >
            Reviews ({ratingsCount})
          </div>
        </div>
        {isReviewsOpen ? (
          <div className="w-full px-5 py-8 border border-gray border-opacity-50 text-gray"></div>
        ) : (
          <div className="w-full px-5 py-8 border border-gray border-opacity-50 flex flex-col gap-5 text-gray">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <Title text1="RELATED" text2="PRODUCTS" />
        <RelatedProducts id={productId} category={category} subCategory={subCategory}/>
      </div>
    </div>
  );
};

export default Product;
