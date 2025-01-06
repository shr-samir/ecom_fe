import { assets } from "../assets/frontend_assets/assets";
import { NewsletterBox, Title } from "../components";

const About = () => {
  return (
    <div className="mt-12 flex flex-col gap-16 justify-center font-outfit">
      <Title text1="ABOUT" text2="US" />
      <div className="flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[500px]" />
        <div className="text-md text-gray-600 flex flex-col gap-6 justify-center leading-6">
          <span>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </span>
          <span>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </span>
          <span className="font-semibold">Our Mission</span>
          <span>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </span>
        </div>
      </div>
      <div className="space-y-10">
        <Title text1="WHY" text2="CHOOSE US" />
        <div className="flex flex-col md:flex-row">
          <div className="border border-mdGray md:border-r-0 flex flex-col justify-center px-10 md:px-16 py-8 sm:py-20 space-y-5 text-sm">
            <h1 className="font-semibold">Quality Assurance:</h1>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border border-mdGray md:border-r-0 flex flex-col justify-center px-10 md:px-16 py-8 sm:py-20 space-y-5 text-sm">
            <h1 className="font-semibold">Convenience:</h1>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border border-mdGray flex flex-col justify-center px-10 md:px-16 py-8 sm:py-20 space-y-5 text-sm">
            <h1 className="font-semibold">Exceptional Customer Service:</h1>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
