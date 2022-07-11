import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import RoomAvatar from "./RoomAvatar";
import axios from "axios";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getchannels`
      );
      const data = response.data;
      setChannels(data);

      router.push(`?channel=10&name=General`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-zinc-900 h-screen p-5  pt-8 relative duration-300`}
    >
      <div
        className={`absolute cursor-pointer -right-3 top-9 w-7  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="text-white"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </div>
      <div className="flex gap-x-4 items-center">
        <Link href="/">
          <a
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="text-white mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
            </svg>
          </a>
        </Link>

        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          CryptoWorld.io
        </h1>
      </div>
      <div className="pt-4">
        <hr className="my-1 mx-4" />
        {channels.map((channel, index) => (
          <RoomAvatar
            key={index}
            id={channel.roomId}
            avatar={channel.avatar}
            name={channel.roomName}
            open={open}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
