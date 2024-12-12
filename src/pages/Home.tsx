import { BestSeller, Hero, LatestCollection, NewsletterBox, OurPolicies } from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicies />
      <NewsletterBox />
    </div>
  );
};

export default Home;
