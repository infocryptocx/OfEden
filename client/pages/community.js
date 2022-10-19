// import React from "react";
// import ChatView from "../components/ChatView";
// import Layout from "../components/Layout";

// const Community = () => {
//   return (
//     <Layout>
//       <ChatView />
//     </Layout>
//   );
// };

// export default Community;

import React from "react";
import MainLayout from "../components/MainLayout";

const unauthorized = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-white text-5xl uppercase my-2 font-bold">
          Unauthorized
        </p>
      </div>
    </MainLayout>
  );
};

export default unauthorized;
