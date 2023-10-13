import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-5">
      <div>
        <Link to="/">
          <img
            src="/images/zingbus-name-logo.webp"
            width={150}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <a href="#">
          <div className="flex rounded-full bg-yellow-400">
            <h3 className="p-4 text-xl text-center ">
              Get extra discount of upto <br />
              ₹500* from zingstore
            </h3>
            <img className="mr-3" src="/images/rarrow.svg" alt="" />
          </div>
        </a>
        <a href="#">
          <div className="mb-5">
            <h3 className="text-right text-fuchsia-600 font-bold text-2xl ">
              Signup
            </h3>
            <p>And Get ₹200 OFF on first booking</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
