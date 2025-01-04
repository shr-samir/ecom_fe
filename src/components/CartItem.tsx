import { Trash2 } from "lucide-react";
import { CartItemProps } from "../context/ShopContext";
// import useShopContext from "../hooks/useShopContext";

export interface CartItemComponentProps {
  cartItems: CartItemProps[];
  onQuantityChange: (productId: string, quantity: number, size: string) => void;
  currency: string;
}

const CartItem: React.FC<CartItemComponentProps> = ({
  cartItems,
  currency,
  onQuantityChange,
}) => {
  // const { cartItems, currency } = useShopContext();
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => {
        return (
          <div className="flex flex-col gap-4">
            <hr className="text-mdGray opacity-70" />
            <div className="mt-2 flex items-center w-full justify-between gap-2">
              <div className="flex gap-3">
                <img
                  className="h-20 w-20 object-contain"
                  src={item.product.image[0]}
                />
                <div className="flex flex-col gap-2 text-xs sm:text-base">
                  <h1 className="">{item.product.name}</h1>
                  <div className="flex items-center gap-5">
                    <span>{`${currency}${item.product.price}`}</span>
                    <span className=" px-3 py-1 bg-gray bg-opacity-15">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center h-full justify-center">
                <input
                  type="number"
                  className="border border-mdGray pl-2 max-w-8 sm:max-w-20 text-xs sm:text-base"
                  defaultValue={item.quantity}
                  min="1"
                  onChange={(e) =>
                    onQuantityChange(
                      item.product._id,
                      parseInt(e.target.value),
                      item.size
                    )
                  }
                />
              </div>
              <div>
                <Trash2 size={16} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
