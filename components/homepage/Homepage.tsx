import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-5 overflow-hidden">
      <iframe
        src="https://mapim-magic.vercel.app/sumudnusantara"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Homepage;
