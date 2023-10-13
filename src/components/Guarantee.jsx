import React from "react";

const Guarantee = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">Zingbus Guarantee</h3>
        <p className="m-3">_____________________</p>
        <h3 className="text-3xl text-[#777]">Curated exclusively for you</h3>
      </div>
      <div>
        <div className="bg-[url('/images/guarantee1.png')] bg-no-repeat">
          <h3 className="m-10">Last-minute Free Cancellations</h3>
          <p>
            Enjoy instant refund & zero <br /> charges on booking <br />{" "}
            cancellation with zingprime
          </p>
          <img className="mt-20" src="/images/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
