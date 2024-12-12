import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">

      {/* Hero left side */}
      <div className="flex  items-center justify-center sm:w-1/2 p-12">
        <div className="flex flex-col gap-5 font-medium text-sm md:text-base text-[#414141]">
          <div className="flex items-center gap-2">
            <hr className="bg-[#414141] w-8 md:w-11 h-[2px] border-none" />
            <p>OUR BESTSELLERS</p>
          </div>
          <div>
            <p className="text-3xl lg:text-5xl">Latest Arrivals</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-semibold hover:text-pink-300 cursor-pointer">
              SHOP NOW
            </p>
            <hr className="bg-[#414141] w-8 md:w-11 h-[2px] border-none" />
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className="sm:w-1/2">
        <img
          src={assets.hero_img}
          alt="Hero Image"
          className="w-full h-auto object-cover aspect-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
