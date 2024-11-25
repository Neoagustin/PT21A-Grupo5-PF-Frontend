import React from "react";
import Banner from "./Banner/Banner";
import HomeSectionsList from "./HomeSectionsList/HomeSectionsList";

const Home: React.FC = () => {
  return (
    <div className="-mt-10 mx-auto md:max-w-[860px] xl:max-w-[1200px] text-blackPage">
      <Banner />
      <HomeSectionsList />
    </div>
  );
};

export default Home;
