import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="mt-20 pt-10 flex flex-col gap-6 text-gray-500">
      <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap sm:justify-between gap-6 sm:gap-32 ">
        <div className="flex flex-col gap-5 flex-wrap max-w-52 md:max-w-96">
          <div className="w-24 md:w-32">
            <img src={assets.logo} alt="" />
          </div>
          <p className="text-xs md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-w-28">
          <h6 className="font-semibold text-base md:text-lg text-black">COMPANY</h6>
          <ul className="text-xs md:text-sm flex flex-col gap-3">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold text-base md:text-lg text-black">GET IN TOUCH</h6>
          <ul className="text-xs md:text-sm flex flex-col gap-2">
            <li>+977 9861898909</li>
            <li>linkwithsamir@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-300 w-full h-[1px] border-none"/>
      <p className="sm:text-center text-xs sm:text-sm">Copyright 2022@Samir Shrestha - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
