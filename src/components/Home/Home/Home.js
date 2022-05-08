import React from "react";
import Collections from "../../Collections/Collections";

import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Inventories />
      <Collections />
    </div>
  );
};

export default Home;
