import React, { useContext } from "react";
import plusFilled from "../assets/icons/plus-filled.svg";
import Image from "next/image";
import { CryptoWorldContext } from "../context/context";

const MessageForm = () => {
  const {
    messageText,
    setMessageText,
    placeholder,
    gun,
    roomName,
    currentAccount,
    currentUser,
  } = useContext(CryptoWorldContext);

  const sendMessage = (event) => {
    event.preventDefault();
    if (messageText.trim() === "") return;

    const messagesRef = gun.get(roomName);

    const newMessage = {
      sender: currentUser.name,
      avatar: currentUser.avatar
        ? currentUser.avatar
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU",
      content: messageText.trim(),
      createdAt: new Date().toLocaleTimeString("en-US", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        hour12: true,
        minute: "numeric",
      }),
      messageId: Date.now(),
    };

    console.log(newMessage);

    messagesRef.set(newMessage);
    setMessageText("");
  };

  return (
    <form
      className="fixed bottom-3 w-full flex mx-2"
      onSubmit={(event) => sendMessage(event)}
    >
      <div className="flex items-center w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
        <div className="w-7 cursor-pointer filter-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="text-red-900"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </div>
        <input
          type="text"
          className="h-8 w-full ml-2 outline-none bg-transparent text-zinc-300"
          value={messageText}
          disabled={currentAccount.name}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
};

export default MessageForm;
