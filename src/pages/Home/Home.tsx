import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import CategorySection from "./CategorySection/CategorySection";
import FearedProductSection from "./FearedProductSection/FearedProductSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FearedProductSection />
    </div>
  );
};

export default Home;
