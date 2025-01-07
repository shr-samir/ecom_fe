import { assets } from "../assets/frontend_assets/assets";
import { CartTotal, DeliveryInfoForm, Title } from "../components";
import useShopContext from "../hooks/useShopContext";

const PlaceOrder = () => {
  const { deliveryFee, currency, cartItemsPrice } = useShopContext();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 mt-12">
      <DeliveryInfoForm />
      <div className="w-full md:w-1/2 max-w-xl flex flex-col gap-12">
        {/* Cart Total section */}
        <div className="flex flex-col gap-5">
          <div>
            <Title text1="CART" text2="TOTAL" />
          </div>
          <CartTotal
            deliveryFee={deliveryFee}
            cartItemsPrice={cartItemsPrice}
            currency={currency}
          />
        </div>

        {/* Payment method section  */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex text-gray items-center justify-start gap-3">
            <h6 className="text-lg sm:text-xl font-medium">
              PAYMENT
              <span className="text-black"> METHOD</span>
            </h6>
            <hr className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray border-none" />
          </div>
          <div className="w-full flex gap-4">
            <label
              htmlFor="stripe"
              className="border border-mdGray flex gap-5 px-5 py-2 justify-start cursor-pointer"
            >
              <input
                type="radio"
                name="stripe"
                id="stripe"
                className="text-mdGray"
              />
              <div className="w-10 flex items-center justify-center">
                <img
                  src={assets.stripe_logo}
                  alt=""
                  className="object-contain"
                />
              </div>
            </label>
            <label
              htmlFor="razorPay"
              className="border border-mdGray flex gap-5 px-5 py-2 justify-start cursor-pointer"
            >
              <input
                type="radio"
                name="razorPay"
                id="razorPay"
                className="text-mdGray"
              />
              <div className="max-w-16 flex items-center justify-center">
                <img
                  src={assets.razorpay_logo}
                  alt=""
                  className="object-contain"
                />
              </div>
            </label>
            <label
              htmlFor="cod"
              className="border border-mdGray flex gap-5 px-5 py-2 justify-start cursor-pointer"
            >
              <input type="radio" name="cod" id="cod" className="text-mdGray" />
              <h6 className="text-xs font-medium">CASH ON DELIVERY</h6>
            </label>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="bg-black w-fit px-6 py-3 text-white text-sm cursor-pointer active:bg-gray content-end"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
