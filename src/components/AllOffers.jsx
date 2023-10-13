import React from "react";
import { Link } from "react-router-dom";

const AllOffers = () => {
  return (
    <div>
      <div className="flex gap-7 justify-center">
        <a href="https://onelink.to/qprmqe" target="_blank">
          <img
            className="rounded-xl"
            src="/images/alloffer1.webp"
            width={264}
            alt="alloffer"
          />
        </a>
        <img
          className="rounded-xl"
          src="/images/alloffer2.webp"
          alt="alloffer"
        />
        <img
          className="rounded-xl"
          src="/images/alloffer3.webp"
          alt="alloffer"
        />
        <img
          className="rounded-xl"
          src="/images/alloffer4.webp"
          alt="alloffer"
        />
      </div>
      <Link to="Offers">
        <h3 className="text-3xl font-semibold text-center my-6">
          Explore All Offers
        </h3>
      </Link>
    </div>
  );
};

export default AllOffers;
