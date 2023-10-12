const Search = () => {
  return (
    <div>
      <div>
        <img src="/images/banner.webp" alt="" />
      </div>

      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <img
            className="h-6 w-6 rounded-full bg-[rgba(123,42,255,.1)]"
            src="/images/pin.svg"
            alt=""
          />
          <h3 className="text-3xl">From City</h3>
        </div>
        <div>
          <input className="input input-bordered" placeholder="From City" />
        </div>
      </div>
    </div>
  );
};

export default Search;
