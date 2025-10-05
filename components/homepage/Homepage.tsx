"use client";

import React, { useEffect } from "react";
import { redirect, RedirectType } from "next/navigation";
import { Loader2 } from "lucide-react";

const Homepage = () => {
  useEffect(() => {
    setTimeout(() => {
      redirect("https://globalsumudflotilla.org/");
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-5 overflow-hidden">
      <Loader2 className="w-20 h-20 animate-spin" />
    </div>
  );
};

export default Homepage;
