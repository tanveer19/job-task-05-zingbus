import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div>
        <img src="/images/banner.webp" alt="" />
      </div>

      <div className="flex justify-center mx-auto -mt-20 mb-16 z-10 relative w-3/4 bg-white rounded-2xl p-4">
        <div className="">
          <div className="flex items-center gap-6 ">
            <img
              className="h-6 w-6 rounded-full bg-[rgba(123,42,255,.1)]"
              src="/images/pin.svg"
              alt=""
            />
            <h3 className="text-3xl">From City</h3>
          </div>

          <input
            className="input input-bordered ml-12 mt-8 border-b border-gray-300"
            placeholder="From City"
          />
        </div>
        <div className="border-x-2 pl-4">
          <div className="flex items-center gap-6 ">
            <img
              className="h-6 w-6 rounded-full bg-[rgba(123,42,255,.1)]"
              src="/images/pin.svg"
              alt=""
            />
            <h3 className="text-3xl">To City</h3>
          </div>

          <input
            className="input input-bordered ml-16 mt-8"
            placeholder="To City"
          />
        </div>
        <div className="pl-4">
          <div className="flex items-center gap-6 ">
            <img
              className="h-6 w-8 rounded-full bg-[rgba(123,42,255,.1)]"
              src="/images/calendar.svg"
              alt=""
            />
            <h3 className="text-3xl ml-3">Date</h3>
          </div>

          <input
            className="input input-bordered ml-16 mt-8"
            placeholder="2023-10-13"
          />
        </div>
        <div>
          <Link to="bus-tickets">
            <button className="btn bg-pink-400 p-5 rounded-xl font-bold text-xl text-white">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
