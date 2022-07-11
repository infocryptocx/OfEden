import React, { useContext, useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import { CryptoWorldContext } from "../context/context";

const Profile = () => {
  const { currentUser, currentAccount } = useContext(CryptoWorldContext);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      username: username,
      bio: bio,
      email: email,
      id: currentUser._id,
    };
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateUser`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-2 gap-8 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className="max-w-md mx-auto my-10 overflow-hidden rounded-lg shadow-lg bg-black">
            <img
              className="object-cover object-fit w-full h-54"
              src={
                !currentUser
                  ? "//style.anu.edu.au/_anu/4/images/placeholders/person.png"
                  : currentUser.avatar
              }
              alt="avatar"
            />

            <div className="px-6 py-4">
              <p className="py-2  text-gray-400">
                {!currentUser ? "name" : currentUser.name}
              </p>

              <p className="py-2  text-gray-400">
                {!currentUser ? "name" : currentUser.bio}
              </p>

              <div className="flex items-center text-red-900 mt-4 ">
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  />
                </svg>

                <h1 className="px-2 text-sm text-white">{currentAccount}</h1>
              </div>

              <div className="flex items-center text-red-900 mt-4 ">
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                  />
                </svg>

                <h1 className="px-2 text-sm text-white">
                  {!currentUser ? "name" : currentUser.name}
                </h1>
              </div>

              <div className="flex items-center text-red-900 mt-4 ">
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                  />
                </svg>

                <h1 className="px-2 text-sm text-white">
                  {!currentUser ? "user@email.com" : currentUser.email}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full max-w-2xl px-6 py-4 mx-auto rounded-md shadow-md bg-black">
            <h2 className="text-3xl font-semibold text-center text-white">
              Update Profile
            </h2>
            <hr className="w-full my-4 bg-red-900" />
            <div className="mt-6 ">
              <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200">
                    Profile Pic
                  </label>
                  {/* {fileUrl && (
                  <img className="rounded mt-4" width="350" src={fileUrl} />
                )} */}
                  <input
                    name="profilePic"
                    className="block w-full px-4 py-2   border rounded-md bg-zinc-800 text-gray-300 border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="file"
                    onChange={uploadImage}
                  />
                </div>
              </div>
              <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200">
                    Name
                  </label>

                  <input
                    name="name"
                    className="block w-full px-4 py-2   border rounded-md bg-zinc-800 text-gray-300 border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>
              <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2 my-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200">
                    Username
                  </label>

                  <input
                    name="username"
                    className="block w-full px-4 py-2   border rounded-md bg-zinc-800 text-gray-300 border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                  />
                </div>
              </div>
              <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2 my-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200">
                    Email
                  </label>

                  <input
                    name="email"
                    className="block w-full px-4 py-2   border rounded-md bg-zinc-800 text-gray-300 border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-200">
                  Bio
                </label>

                <textarea
                  name="bio"
                  className="block w-full h-40 px-4 py-2   border rounded-md bg-zinc-800 text-gray-300 border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                ></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  className="px-4 py-2 my-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-900 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                  onClick={updateProfile}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
