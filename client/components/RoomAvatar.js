import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const RoomAvatar = ({ id, avatar, name, open }) => {
  const router = useRouter();

  const changeUrl = () => {
    router.push(`?channel=${id}&name=${name}`);
  };
  return (
    <div className="" onClick={changeUrl}>
      <div
        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
             "mt-2"} ${id === 1 && "bg-light-white"} `}
      >
        <Image
          src={avatar}
          className="rounded-full"
          height={38}
          width={38}
          alt={name}
        />
        <p
          className={`${
            !open && "hidden"
          } mx-2 text-white origin-left duration-200`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default RoomAvatar;
