import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-5">
      <div>
        <Link to="/">
          {" "}
          <img
            src="/images/zingbus-name-logo.webp"
            width={150}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex">
        <div>
          <h3 className="bg-yellow-400">
            Get extra discount of upto <br />
            ₹500* from zingstore
          </h3>
        </div>
        <div>
          <h3>Signup</h3>
          <p>And Get ₹200 OFF on first booking</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
