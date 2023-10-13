import React from "react";

const Download = () => {
  return (
    <div className="bg-[rgba(123,42,255,.25)] rounded-xl my-16 h-[160] flex justify-around items-center">
      <img src="/images/downloadicon.webp" alt="" />
      <div>
        <h3 className="text-3xl font-bold">
          Download the app to get ₹200 OFF on your first bus <br /> booking
        </h3>
        <a href="https://play.google.com/store/apps/details?id=com.zingbusbtoc.zingbus">
          <button className="btn btn-wide bg-purple-500 px-10 py-3 mt-3 font-bold rounded-xl text-white text-3xl">
            Download Now
          </button>
        </a>
      </div>
      <div className="flex">
        <img src="/images/orIcon.svg" alt="" />
        <img src="/images/qrCode.svg" alt="" />
      </div>
    </div>
  );
};

export default Download;
