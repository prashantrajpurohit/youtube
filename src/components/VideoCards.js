import React, { useEffect, useState } from "react";
import { VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
const VideoCards = () => {
  const [videoCard, setVideoCard] = useState([]);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const data = await fetch(VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideoCard(json.items);
  };

  return (
    <div className="flex flex-wrap m-2">
      {videoCard?.map((card, idx) => {
        return (
          <Link
            to={`/watch/?v=${card.id}`}
            key={idx}
            className="p-5   shadow-lg w-1/3 "
          >
            <div className="">
              <img
                alt="thumbnail"
                className="rounded-lg"
                src={card.snippet.thumbnails.medium.url}
              />
              <p className="font-semibold py-2">{card.snippet.title}</p>
              <p className="from-neutral-400"> {card.snippet.channelTitle}</p>
              <p>{card?.statistics?.viewCount} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoCards;
