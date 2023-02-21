import React from "react";

const ButtonList = () => {
  const buttonsListArray = [
    "Live",
    "Gaming",
    "JavaScript",
    "Scout",
    "SharkTank",
    "BGMI",
    "Mavi",
    "Shiv Ji",

    "Mc Stan",
  ];

  return (
    <div className="mx-16">
      {buttonsListArray.map((item, idx) => {
        return (
          <button key={idx} className="px-4 py-1 m-3 bg-gray-200 rounded-lg  ">
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
