import React, { useState } from "react";
import workData from "../../workData.json";

export default function Work(props) {
  const [currentWork, setCurrentWork] = useState(workData.data[0].name);

  return (
    <div>
      <div className="pb-8 flex flex-wrap justify-center">
        {workData.data.map((work, key) => (
          <h3
            key={key}
            className="cursor-pointer px-5 py-1 text-lg"
            style={{
              color:
                work.name === currentWork
                  ? "rgba(0,0,0,1)"
                  : "rgba(0,0,0,0.25)",
            }}
            onClick={() => {
              props.setWordList(work.tags);
              setCurrentWork(work.name);
            }}
          >
            {work.name}
          </h3>
        ))}
      </div>

      {workData.data
        .filter((work) => work.name === currentWork)
        .map((work, key) => (
          <div key={key} className="flex justify-center items-center flex-col">
            <img
              src={work.media[0].link}
              style={{
                width: "90%",
                aspectRatio: "22/9",
                objectFit: "cover",
                filter: "grayscale(100%)",
              }}
            ></img>
            <div className="px-12 md:px-24 py-8">
              <p>
                {" "}
                <span className="font-bold">Technologies Used:</span>{" "}
                {work.technology}
              </p>
              <p className="pt-4">
                {work.description[0].text.substring(0, 500) + ".. "}
                <a
                  className="font-bold underline underline-offset-4"
                  href={"/work/" + work.name}
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
