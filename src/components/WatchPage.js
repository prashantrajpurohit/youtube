import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeBar } from "../utils/appSlice";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";
import Recommended from "./Recommended";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeBar());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col">
        <div className="pl-3 pr-2">
          <iframe
            width="900"
            height="500"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <CommentSection />
      </div>
      <div className="flex flex-col">
        <LiveChat />
        <Recommended />
      </div>
    </>
  );
};

export default WatchPage;
