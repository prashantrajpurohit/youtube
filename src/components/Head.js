import React from "react";
import { useDispatch } from "react-redux";
import { toggleBar } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleBarHandler = () => {
    dispatch(toggleBar());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleBarHandler}
          className="h-5 cursor-pointer"
          alt="ham-icon"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
        />
        <a href="/">
          <img
            className="h-5 mx-3"
            alt="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 mx-3">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full  p-1"
          type="text"
        />
        <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-200 ">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
