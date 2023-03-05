import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeBar } from "../utils/appSlice";
import { addMessage } from "../utils/chatSlice";
import { generate, generateString } from "../utils/helper";
const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const chatMessages = useSelector((store) => store.chat.messages);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  dispatch(closeBar());
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: generateString(10) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  function TypeToChat(typedText) {
    dispatch(
      addMessage({
        name: "prashant",
        message: typedText,
      })
    );
  }

  return (
    <>
      {isOpen && (
        <div>
          <div className="h-[58px] p-4 items-center  bg-black text-white rounded-tl-3xl rounded-tr-3xl w-[327px]">
            LIVE CHAT
            <button className="mx-2"> 🔽 </button>
          </div>
          <div className=" w-[327px] h-[500px] border border-black mr-4 rounded-lg rounded-t-none overflow-y-scroll overflow-x-hidden flex flex-col-reverse ">
            {chatMessages?.map((text, idx) => {
              return (
                <div className="flex items-center" key={idx}>
                  <img
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    className="h-6 m-2"
                  />
                  <div className="font-bold px-2"> {text.name} </div>
                  <div className="">
                    <p>{text.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="m-1 flex  ">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                TypeToChat(inputText);
                setInputText("");
              }}
            >
              <input
                type="text"
                className="w-60 p-1 m-2 "
                placeholder="Type Here"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
              <button className="bg-green-200 rounded-lg mx-2 mb-1 p-1">
                Send
              </button>
            </form>
          </div>
          <div
            className="text-center bg-black text-white rounded-2xl p-2 m-2"
            onClick={() => setIsOpen(false)}
          >
            hide chat
          </div>
        </div>
      )}
      {!isOpen && (
        <div
          className="text-center bg-black text-white rounded-2xl p-2 m-2"
          onClick={() => setIsOpen(true)}
        >
          Show chat
        </div>
      )}
    </>
  );
};

export default LiveChat;
