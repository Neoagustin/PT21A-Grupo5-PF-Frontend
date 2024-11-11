import React from "react";
import Banner from "./Banner/Banner";
import HomeSectionsList from "./HomeSectionsList/HomeSectionsList";

const Home: React.FC = () => {
  return (
    <main className="mx-auto md:max-w-[860px] xl:max-w-[1200px] text-blackPage">
      <Banner />
      <HomeSectionsList />
    </main>
  );
};

export default Home;
