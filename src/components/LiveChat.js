import React, { useEffect, useState } from "react";

const LiveChat = () => {
  // const [showChat, setShowChat] = useState(true);
  const [inputText, setInputText] = useState("");
  const [Chattext, setChatText] = useState([]);
  useEffect(() => {
    RandomText();
  }, []);

  async function RandomText() {
    let newArr;
    const data = await fetch("https://random-word-api.herokuapp.com/all");
    let json = await data.json();
    newArr = json.slice(0, 12);
    setChatText(newArr);
  }
  function TypeToChat(typedText) {
    Chattext.push(typedText);
  }
  console.log(Chattext);

  return (
    <>
      <div className=" w-[327px] h-[500px] border border-black mr-4 rounded-lg overflow-y-scroll overflow-x-hidden ">
        <div className="h-[48px] p-2  bg-black text-white rounded-t-lg absolute w-[327px]">
          LIVE CHAT
          <button className="ml-2"> 🔽 </button>
        </div>
        {Chattext?.map((text) => {
          return (
            <div className="flex " key={text}>
              <img
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                className="h-6 m-2"
              />

              <div className="mt-1">
                <p>{text}</p>
              </div>
            </div>
          );
        })}
        <div className="m-1 flex ">
          <input
            type="text"
            className="w-72 mb-1"
            placeholder="Type Here"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              TypeToChat(inputText);
              setInputText("");
            }}
            className="bg-green-200 rounded-lg mx-2 mb-1 p-1"
          >
            Send
          </button>
        </div>
        <div>
          <button className="bg-red-400 text-black w-[320px] rounded-lg hover:bg-gray-500 hover:text-white">
            HIDE
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
