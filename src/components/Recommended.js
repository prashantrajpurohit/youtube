import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RECOMMENDED_VIDEOS_API } from "../utils/constant";

const Recommended = () => {
  const [recommendedVcard, setRecommendedVcard] = useState([]);
  useEffect(() => {
    ForRecommendedVideos();
  }, []);

  const ForRecommendedVideos = async () => {
    const RecommendedVideos = await fetch(RECOMMENDED_VIDEOS_API);
    const JSON = await RecommendedVideos.json();
    setRecommendedVcard(JSON.items);
  };
  return (
    <div>
      {recommendedVcard.map((card, idx) => {
        return (
          <Link to={`/watch/?v=${card.id}`} key={idx}>
            <div className=" p-2 w-[327px] ">
              <img
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

export default Recommended;
