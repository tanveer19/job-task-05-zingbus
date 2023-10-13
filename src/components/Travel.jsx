import React from "react";

const Travel = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">Travel Anywhere</h3>
        <p className="m-3">_____________________</p>
        <h3 className="text-3xl text-[#777] mb-6">Just a click away</h3>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel1.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Jaipur</h3>
            <p>5 trips available</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel2.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Haridwar</h3>
            <p>5 trips available</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel3.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Dehradun</h3>
            <p>5 trips available</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel4.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Rishikesh</h3>
            <p>5 trips available</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel5.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Roorkee</h3>
            <p>5 trips available</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel6.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Katra</h3>
            <p>5 trips available</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel6.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Jammu</h3>
            <p>5 trips available</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-2 rounded-lg max-w-[245px]">
          <img src="/images/travel8.webp" className="rounded-xl w-16" alt="" />
          <div className="ml-3">
            <h3 className="text-xl">Dharamshala</h3>
            <p>5 trips available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
