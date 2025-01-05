import { useEffect, useState } from "react";
import useShopContext from "../hooks/useShopContext";
import { Product } from "../context/ShopContext";
import { ProductPolicies, Ratings } from ".";

interface DetailedProductItemProps {
  id: string | undefined;
}
const DetailedProductItem: React.FC<DetailedProductItemProps> = ({ id }) => {
  const ratingsCount = 122;
  const [productData, setProductData] = useState<Product | undefined>(
    undefined
  );
  const [currentImage, setCurrentImage] = useState<string | undefined>("");
  const [currentSize, setCurrentSize] = useState<string | undefined>("");

  const { products, currency, addToCart } = useShopContext();

  const fetchProductData = () => {
    if (!id) return;
    const productDetails = products.find((item) => item._id === id);
    setProductData(productDetails);
    setCurrentImage(productDetails?.image[0]);
  };

  useEffect(() => {
    setCurrentSize("")
    fetchProductData();
  }, [id]);

  return productData && productData != undefined ? (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-5">
      {/* image side  */}
      <div className="flex flex-col md:flex-row gap-5 w-full lg:w-1/2">
        <div className="flex md:flex-col gap-3 overflow-hidden overflow-x-scroll lg:overflow-y-scroll md:h-[450px]  lg:h-[360px] xl:h-[450px] order-2 md:order-1 max-w-[390px]">
          {productData.image.map((img, index) => {
            return (
              <div
                className="max-w-28 cursor-pointer flex items-center justify-center"
                key={index}
                onClick={() => setCurrentImage(img)}
              >
                <img
                  src={img}
                  alt={`Product ${productData.name}`}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
        <div className="md:order-2">
          <img src={currentImage} alt={`Product ${productData.name}`} />
        </div>
      </div>

      {/* details side */}
      <div className="flex flex-col gap-8 font-outfit lg:w-1/2">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl">{productData.name}</h1>
            <div className="flex gap-2 text-sm items-center font-medium">
              <Ratings />
              <span>({ratingsCount})</span>
            </div>
          </div>
          <p className="text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray">{productData.description}</p>
          <form
            method="POST"
            className="flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (currentSize) addToCart(productData._id, currentSize);
              else {
                console.error("Size is undefined.");
                alert("Please select a size");
              }
            }}
          >
            <div className="flex flex-col gap-3">
              <p className="">Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((size) => (
                  <button
                    type="button"
                    className={`px-5 py-3 cursor-pointer ${
                      currentSize === size
                        ? "outline outline-1 outline-gray"
                        : " "
                    }`}
                    value={size}
                    key={size}
                    onClick={() => setCurrentSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="bg-black w-fit px-6 py-3 text-white text-sm cursor-pointer active:bg-gray"
            >
              ADD TO CART
            </button>
          </form>
        </div>
        <hr className="text-gray opacity-50" />
        <ProductPolicies />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default DetailedProductItem;
