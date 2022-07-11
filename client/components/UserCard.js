import React from "react";
import Image from "next/image";

const UserCard = ({ id, avatar, name, bio }) => {
  return (
    <div className="w-full flex flex-col mx-auto overflow-hidden rounded-lg shadow-lg bg-zinc-900">
      <div className="flex justify-center items-center mt-5">
        {avatar == null ? (
          <img
            src={"//style.anu.edu.au/_anu/4/images/placeholders/person.png"}
            className="rounded-full w-24"
            alt="avatar"
          />
        ) : (
          <img src={avatar} className="rounded-full w-24" alt="avatar" />
        )}
      </div>

      <div className="py-5 text-center flex flex-col">
        <span className="text-lg font-bold my-2 text-gray-200">{name}</span>
        <span className="mx-2 text-sm font-bold my-2 text-gray-200">{id}</span>
        <span className="text-sm text-gray-200">{bio}</span>
      </div>
    </div>
  );
};

export default UserCard;
