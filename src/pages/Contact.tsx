import { assets } from "../assets/frontend_assets/assets";
import { NewsletterBox, Title } from "../components";

const Contact = () => {
  return (
    <div className="mt-12 flex flex-col gap-14 justify-center font-outfit">
      <Title text1="CONTACT" text2="US" />
      <div className="flex flex-col md:flex-row gap-12 mb-10">
        <img src={assets.contact_img} className="w-full md:max-w-[500px]" />
        <div className="flex flex-col gap-6 items-start justify-center leading-6">
          <p className="font-semibold text-lg">Our Store</p>
          <p>
            54709 Willms Station
            <br />
            Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-lg">Careers at Forever</p>
          <p>Learn more about our teams and job openings.</p>
          <button className="border border-mdGray px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
