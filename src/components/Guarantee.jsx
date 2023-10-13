import React from "react";

const Guarantee = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">Zingbus Guarantee</h3>
        <p className="m-3">_____________________</p>
        <h3 className="text-3xl text-[#777] mb-6">
          Curated exclusively for you
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="bg-[url('/images/guarantee1.webp')] bg-no-repeat flex flex-col items-start pt-8 pr-14 pb-10 pl-5">
          <h3 className="text-3xl text-white">
            Last-minute <br /> Free <br />
            Cancellations
          </h3>
          <p className="text-white">
            Enjoy instant refund & zero <br /> charges on booking cancellation
            with <br />
            zingprime
          </p>
          <img className="mt-16" src="/images/arrow.svg" alt="" />
        </div>
        <div className="bg-[url('/images/guarantee2.webp')] bg-no-repeat flex flex-col items-start justify-between pt-8 pr-14 pb-10 pl-5">
          <h3 className="text-3xl text-white">
            On-Time <br /> Guarantee
          </h3>
          <p className="text-white mb-8">
            Receive 50% refund for any travel <br /> delays exceeding 45 minutes
          </p>
          <img className="mt-16" src="/images/arrow.svg" alt="" />
        </div>
        <div className="bg-[url('/images/guarantee3.webp')] bg-no-repeat flex flex-col items-start justify-between pt-8 pr-14 pb-10 pl-5">
          <h3 className="text-3xl text-white">
            100% Assured <br /> trip
          </h3>
          <p className="text-white mb-8">
            Get a free flight ticket or 3x the <br /> booking amount on bus{" "}
            <br />
            cancellation
          </p>
          <img className="mt-16" src="/images/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
