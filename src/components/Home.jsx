import React from "react";
import Search from "./Search";
import AllOffers from "./AllOffers";
import OffersForYou from "./OffersForYou";
import Download from "./Download";
import Guarantee from "./Guarantee";

const Home = () => {
  return (
    <div>
      <Search></Search>
      <AllOffers></AllOffers>
      <OffersForYou></OffersForYou>
      <Download></Download>
      <Guarantee></Guarantee>
    </div>
  );
};

export default Home;
