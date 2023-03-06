import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleBar, toggleSuggBar, updateSearch } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  let suggestion_box = useSelector((store) => store.app.isSuggBoxOpen);
  const dispatch = useDispatch();
  const selectedSearch = useSelector((store) => store.app.selectedSearch);

  const searchCache = useSelector((store) => store.search);
  const [searchedText, setSearchedText] = useState("");
  const [suggestedText, setsuggestedText] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const toggleBarHandler = () => {
    dispatch(toggleBar());
  };
  const SearchHandler = (value) => {
    dispatch(updateSearch(value));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchedText]) {
        setsuggestedText(searchCache[searchedText]);
      } else {
        FetchSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchedText]);

  async function FetchSuggestion() {
    const suggestion = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchedText
    );
    const JSON = await suggestion.json();
    setsuggestedText(JSON[1]);
    dispatch(
      cacheResults({
        [searchedText]: JSON[1],
      })
    );
  }
  return (
    <>
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
          <form onSubmit={(e) => e.preventDefault}>
            <input
              onChange={(e) => {
                SearchHandler(e.target.value);
                setSearchedText(e.target.value);
              }}
              value={searchedText}
              className="w-1/2 border border-gray-400 rounded-l-full  p-1"
              type="text"
              onFocus={() => {
                setShowSuggestion(true);
                dispatch(toggleSuggBar);
              }}
            />
            <Link to={`/searchedPage/?search_query=${selectedSearch}`}>
              <button
                type="submit"
                className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-200 "
              >
                🔍
              </button>
            </Link>
          </form>

          {(showSuggestion, suggestion_box) && (
            <div className=" bg-white w-1/3  absolute cursor-default shadow-lg rounded-lg border border-gray-100">
              {suggestedText?.map((text, idx) => (
                <p
                  key={idx}
                  onClick={() => {
                    setSearchedText(text);
                    SearchHandler(text);
                    dispatch(toggleSuggBar());
                  }}
                  className="p-1 hover:bg-gray-100"
                >
                  🔍{text}
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <img
            alt="user"
            className="h-8"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
