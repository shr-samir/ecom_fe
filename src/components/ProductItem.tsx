import { Link } from "react-router-dom";
import useShopContext from "../hooks/useShopContext";

interface ProductItemProps {
  id: string;
  image: string[];
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  image,
  name,
  price,
}) => {
  // custom hook
  const { currency } = useShopContext();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={`/product/${id}`}
      onClick={scrollToTop}
      className="text-gray-700 cursor-pointer flex flex-col gap-3"
    >
      <div className="overflow-hidden ">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="text-xs">{name}</p>
      <p className="text-sm font-semibold">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
