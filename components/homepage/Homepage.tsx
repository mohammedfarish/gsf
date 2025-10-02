import React from "react";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-5 overflow-hidden">
      <iframe
        src="https://mapim-magic.vercel.app/sumudnusantara"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        className="z-10"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      ></iframe>

      <div className="fixed bottom-0 right-0 bg-white p-5 w-32 m-5 rounded-lg flex flex-col items-center text-center z-20 shadow-lg select-none">
        <small>
          This is an iframe implementation by{` `}
          <Link
            href="https://fari.sh?utm_source=globalsumudflotila.org&utm_medium=referral"
            target="_blank"
            className="text-blue-500 underline"
          >
            fari.sh
          </Link>
          .
        </small>
      </div>
    </div>
  );
};

export default Homepage;
