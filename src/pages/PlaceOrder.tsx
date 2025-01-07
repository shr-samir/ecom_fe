import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { CartTotal, DeliveryInfoForm, Title } from "../components";
import useShopContext from "../hooks/useShopContext";

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [deliveryFormData, setDeliveryFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    street: "",
    address: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const { deliveryFee, currency, cartItemsPrice } = useShopContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryFormData({ ...deliveryFormData, [name]: value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  }
  
  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(deliveryFormData);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 mt-12">
      <DeliveryInfoForm
        deliveryFormData={deliveryFormData}
        handleInputChange={handleInputChange}
      />
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
          <div className="w-full flex flex-col md:flex-row gap-4">
            <label
              htmlFor="stripe"
              className="border border-mdGray flex gap-5 px-5 py-2 justify-start cursor-pointer w-52"
            >
              <input
                type="radio"
                name="paymentMethod"
                id="stripe"
                value="stripe"
                className="text-mdGray"
                onChange={handlePaymentChange}  
                checked={paymentMethod === "stripe"}            
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
              className="border border-mdGray flex gap-5 px-5 py-2 justify-start cursor-pointer w-52"
            >
              <input
                type="radio"
                name="paymentMethod"
                id="razorPay"
                value="razorPay"
                className="text-mdGray"
                onChange={handlePaymentChange} 
                checked={paymentMethod === "razorPay"}             
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
              className="border border-mdGray flex gap-5 px-5 py-2 justify-start cursor-pointer w-52"
            >
              <input
                type="radio"
                name="paymentMethod"
                id="cod"
                value="cod"
                className="text-mdGray"
                onChange={handlePaymentChange}  
                checked={paymentMethod === "cod"}            
              />
              <h6 className="text-xs font-medium">CASH ON DELIVERY</h6>
            </label>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="bg-black w-fit px-6 py-3 text-white text-sm cursor-pointer active:bg-gray content-end"
              onClick={handleOrderSubmit}
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
