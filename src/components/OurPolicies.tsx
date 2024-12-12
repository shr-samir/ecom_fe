import PolicyCard from "./PolicyCard";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicies = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center py-10 px-5">
      <PolicyCard
        logo={assets.exchange_icon}
        title="Easy Exchange Policy"
        description="We offer hassle free exchange policy"
      />
      <PolicyCard
        logo={assets.quality_icon}
        title="7 Days Return Policy"
        description="We provide 7 days free return policy"
      />
      <PolicyCard
        logo={assets.support_img}
        title="Best customer support"
        description="We provide 24/7 customer support"
      />
    </div>
  );
};

export default OurPolicies;
