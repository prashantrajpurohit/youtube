import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeBar, updateSearch } from "../utils/appSlice";
import { NEW_API_KEY, SEARCH_API } from "../utils/constant";

const SearchedPage = () => {
  const [searchedVideo, setSearchedVideo] = useState([]);
  const dispatch = useDispatch();
  const selectedSearch = useSelector((store) => store.app.selectedSearch);
  console.log(selectedSearch);
  useEffect(() => {
    dispatch(closeBar());
  }, []);

  useEffect(() => {
    SearchedData();
  }, []);
  const SearchedData = async () => {
    const data = await fetch(SEARCH_API + selectedSearch + NEW_API_KEY);
    const json = await data.json();
    console.log(json.items);
    setSearchedVideo(json.items);
  };
  return (
    <div className="flex flex-wrap m-2">
      {searchedVideo?.map((card, idx) => {
        if (card.id.kind === "youtube#channel") {
          return (
            <Link
              to={`/watch/?v=${card.id.videoId}`}
              key={idx}
              className="p-5   shadow-lg w-1/4 "
            >
              <div>
                <img
                  className="rounded-lg"
                  src={card.snippet.thumbnails.medium.url}
                />
                <p className="font-semibold py-2">{card.snippet.title}</p>
                <p className="from-neutral-400"> {card.snippet.description}</p>
              </div>
            </Link>
          );
        } else {
          return (
            <Link
              to={`/watch/?v=${card.id.videoId}`}
              key={idx}
              className="p-5   shadow-lg w-1/4 "
            >
              <div className="">
                <img
                  className="rounded-lg"
                  src={card.snippet.thumbnails.medium.url}
                />
                <div>
                  <p className="font-semibold py-2">{card.snippet.title}</p>
                  <p className="from-neutral-400">
                    {" "}
                    {card.snippet.channelTitle}
                  </p>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SearchedPage;
