import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeBar } from "../utils/appSlice";
import { NEW_API_KEY, SEARCH_API } from "../utils/constant";

const SearchedPage = () => {
  let suggestion_box = useSelector((store) => store.app.isSuggBoxOpen);
  const [searchedVideo, setSearchedVideo] = useState([]);
  const dispatch = useDispatch();
  const selectedSearch = useSelector((store) => store.app.selectedSearch);
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
              to={`/channelDetails/?c_id=${card.id.channelId}`}
              key={idx}
              className="p-5 m-3 border border-b-2 shadow-xl w-full "
            >
              <div className="flex">
                <img
                  alt="thumbnail"
                  className="rounded-full"
                  src={card.snippet.thumbnails.medium.url}
                />
                <div className="p-5 m-5 ">
                  <p className="font-semibold py-2  ">{card.snippet.title}</p>
                  <p className="from-neutral-400">{card.snippet.description}</p>
                </div>
              </div>
            </Link>
          );
        } else {
          return (
            <Link
              to={`/watch/?v=${card.id.videoId}`}
              key={idx}
              className="p-5   shadow-lg w-full"
            >
              <div className="flex">
                <img
                  alt="thumbnail"
                  className="h-[10rem] mr-4 hover:rounded-xl"
                  src={card.snippet.thumbnails.medium.url}
                />
                <div>
                  <div>
                    <p className="font-semibold py-2">{card.snippet.title}</p>
                    <p className="from-neutral-400">
                      {card.snippet.channelTitle}
                    </p>
                  </div>
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
