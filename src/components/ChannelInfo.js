import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ChannelInfo = () => {
  const [channelVideo, setChannelVideo] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  useEffect(() => {
    GetChannelData();
  }, []);

  const GetChannelData = async () => {
    const ChannelsVideo = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAFL5XCUWp-Z-D4o6VHKxUNestuASWcofw&channelId=${searchParams.get(
        "c_id"
      )}&part=snippet&id&order=date&maxResults=41`
    );
    const JSON = await ChannelsVideo.json();
    console.log(JSON.items);
    setChannelVideo(JSON.items);
  };

  return (
    <>
      <div className="flex flex-wrap m-2">
        {channelVideo.reverse()?.map((card, idx) => {
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
                    <p className="from-neutral-400">
                      {card.snippet.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          } else {
            return (
              <Link
                to={`/watch/?v=${card.id.videoId}`}
                key={idx}
                className="p-5 shadow-lg w-1/4 "
              >
                <div className="">
                  <img
                    alt="thumbnail"
                    className="rounded-lg"
                    src={card.snippet.thumbnails.medium.url}
                  />
                  <p className="font-semibold py-2">{card.snippet.title}</p>
                  <p className="from-neutral-400">
                    {card.snippet.channelTitle}
                  </p>
                  {/* <p>{card?.statistics?.viewCount} views</p> */}
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default ChannelInfo;
