import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerator, randomStringGenerator } from "../utils/helper";

// const data

const Livechat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("polling...");
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomStringGenerator() + "🚀🚀",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="ml-2 w-full h-[550px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default Livechat;
