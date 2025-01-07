import { Title } from ".";

interface DeliveryInfoFormProps {
  deliveryFormData: {
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
  },
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
}
const DeliveryInfoForm:React.FC<DeliveryInfoFormProps> = ({deliveryFormData, handleInputChange}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="content-start">
        <Title text1="DELIVERY" text2="INFORMATION" />
      </div>
      <div className="text-sm sm:text-base grid grid-rows-6 gap-4">
        <div className="grid grid-cols-2 gap-4 sm:gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border p-2 rounded outline-gray text-black border-mdGray"
            value={deliveryFormData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border p-2 rounded outline-gray text-black border-mdGray"
            value={deliveryFormData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border p-2 rounded outline-gray text-black border-mdGray"
          value={deliveryFormData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          className="border p-2 rounded outline-gray text-black border-mdGray"
          value={deliveryFormData.street}
          onChange={handleInputChange}
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="border p-2 rounded outline-gray text-black border-mdGray"
            value={deliveryFormData.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="border p-2 rounded outline-gray border-mdGray"
            value={deliveryFormData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-3">
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            className="border p-2 rounded outline-gray text-black border-mdGray"
            value={deliveryFormData.zipCode}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="border p-2 rounded outline-gray text-black border-mdGray"
            value={deliveryFormData.country}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="border p-2 rounded outline-gray text-black border-mdGray"
          value={deliveryFormData.phone}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default DeliveryInfoForm;
