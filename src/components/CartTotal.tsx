interface CartTotalProps {
  currency: string;
  cartItemsPrice: number;
  deliveryFee: number;
}

const CartTotal: React.FC<CartTotalProps> = ({
  currency,
  cartItemsPrice,
  deliveryFee,
}) => {
  return (
    <div className="text-sm flex flex-col gap-2 max-w-sm">
      <div className="flex justify-between items-center">
        <p>Subtotal</p>
        <p>
          {currency}
          {cartItemsPrice.toFixed(2)}
        </p>
      </div>
      <hr className="text-mdGray opacity-70" />
      <div className="flex justify-between items-center">
        <p>Delivery Fees</p>
        <p>
          {currency}
          {deliveryFee.toFixed(2)}
        </p>
      </div>
      <hr className="text-mdGray opacity-70" />
      <div className="flex justify-between items-center">
        <p className="font-semibold">Total</p>
        <p>
          {currency}
          {(cartItemsPrice + deliveryFee).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
