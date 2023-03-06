import React, { useState } from "react";
import TextCloud from "./components/TextCloud";

export default function Home() {
  const [about, setAbout] = useState(true);
  return (
    <div className="flex">
      <TextCloud></TextCloud>
      <div className="h-screen w-1/2 flex justify-center items-center">
        <h1 className="text-7xl text-center">
          Aakarsh <br></br> Singh
        </h1>
      </div>
      <div className="h-screen w-1/2 flex justify-center items-center">
        <h2 className="text-3xl font-bold cursor-pointer">
          <span
            style={{ color: about ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.25)" }}
            onClick={() => setAbout(true)}
          >
            about
          </span>
          {" | "}
          <span
            style={{ color: !about ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.25)" }}
            onClick={() => setAbout(false)}
          >
            work
          </span>
        </h2>
      </div>
    </div>
  );
}
