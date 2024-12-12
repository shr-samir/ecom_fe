import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

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
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return null;
  }

  const { currency } = shopContext;

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer flex flex-col gap-3">
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
