import React, { useState } from "react";
import TextCloud from "./components/TextCloud";
import About from "./components/About";
import Work from "./components/Work";
import workData from "../workData.json";
export default function Home(props) {
  const [about, setAbout] = useState(false);
  const [wordList, setWordList] = useState([]);

  return (
    <div className="flex flex-col md:flex-row">
      <TextCloud
        wordList={wordList}
        randomNumbers={props.randomNumbers}
      ></TextCloud>
      <div className="min-h-screen max-h-screen w-full md:w-1/2 flex justify-center items-center">
        <h1 className="text-7xl text-center">
          Aakarsh <br></br> Singh
        </h1>
      </div>
      <div className="min-h-screen w-full md:w-1/2 py-8 flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl cursor-pointer pb-8">
          <span
            style={{ color: !about ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.25)" }}
            onClick={() => {
              setAbout(false);
              setWordList(workData.data[0].tags);
            }}
          >
            work
          </span>
          {" | "}
          <span
            style={{ color: about ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.25)" }}
            onClick={() => {
              setAbout(true);
              setWordList([]);
            }}
          >
            about
          </span>
        </h2>
        {about ? <About></About> : <Work setWordList={setWordList}></Work>}
      </div>
    </div>
  );
}
