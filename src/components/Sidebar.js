import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
  if (!isSideBarOpen) return null;
  return (
    <div className="p-5 shadow-lg w-60">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Live</li>
      </ul>
      <div className=" border-t-2 border-gray-300 rounded-sm w-25 my-2"></div>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>

      <div className=" border-t-2 border-gray-300 rounded-sm w-25 my-2"></div>
      <h2 className="font-semibold">Subscriptions</h2>
      <ul>
        <li>channel 1</li>
        <li>channel 3</li>
        <li>channel 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
