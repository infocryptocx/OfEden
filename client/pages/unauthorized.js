import React from "react";
import MainLayout from "../components/MainLayout";

const unauthorized = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-white text-5xl uppercase my-2 font-bold">
          Unauthorized
        </p>
        <p className="text-white text-xl font-semibold">
          Not A Hoodlumz Holder
        </p>
      </div>
    </MainLayout>
  );
};

export default unauthorized;
