import { Title } from ".";

const DeliveryInfoForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="content-start">
        <Title text1="DELIVERY" text2="INFORMATION" />
      </div>
      <div className="text-sm sm:text-base grid grid-rows-6 gap-4">
        <div className="grid grid-cols-2 gap-4 sm:gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded outline-gray text-black border-mdGray"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded outline-gray text-black border-mdGray"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border p-2 rounded outline-gray text-black border-mdGray"
        />
        <input
          type="text"
          placeholder="Street"
          className="border p-2 rounded outline-gray text-black border-mdGray"
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-3">
          <input
            type="text"
            placeholder="City"
            className="border p-2 rounded outline-gray text-black border-mdGray"
          />
          <input
            type="text"
            placeholder="State"
            className="border p-2 rounded outline-gray border-mdGray"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-3">
          <input
            type="text"
            placeholder="Zip Code"
            className="border p-2 rounded outline-gray text-black border-mdGray"
          />
          <input
            type="text"
            placeholder="Country"
            className="border p-2 rounded outline-gray text-black border-mdGray"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone"
          className="border p-2 rounded outline-gray text-black border-mdGray"
        />
      </div>
    </div>
  );
};

export default DeliveryInfoForm;
