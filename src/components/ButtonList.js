import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateSearch } from "../utils/appSlice";

const ButtonList = () => {
  const dispatch = useDispatch();
  const ClickOnBtn = (value) => {
    dispatch(updateSearch(value));
  };
  const buttonsListArray = [
    "Gaming",
    "JavaScript",
    "Scout",
    "Akshay Saini",
    "React",
    "BGMI",
    "Mavi",
    "Shiv Ji",
    "Mc Stan",
  ];
  return (
    <div className="space-x-1 ml-[5rem]">
      {buttonsListArray.map((item, idx) => {
        return (
          <Link key={idx} to={`/searchedPage/?search_query=${item}`}>
            <button
              className="px-4 py-1 m-3 bg-gray-200 rounded-lg"
              onClick={() => {
                ClickOnBtn(item);
              }}
            >
              {item}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ButtonList;
