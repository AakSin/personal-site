import React from "react";

export default function TextCloud(props) {
  const wordProperties = [
    {
      word: "technology",
      size: 1,
      active: true,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
    {
      word: "arts",
      size: 1,
      active: false,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
    {
      word: "technology",
      size: 1,
      active: true,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
    {
      word: "arts",
      size: 1,
      active: false,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
    {
      word: "technology",
      size: 1,
      active: true,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
    {
      word: "arts",
      size: 1,
      active: false,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
    {
      word: "technology",
      size: 1,
      active: true,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
    {
      word: "arts",
      size: 1,
      active: false,
      top: Math.random() * window.innerHeight + "px",
      left: (Math.random() * window.innerWidth) / 2 + "px",
    },
  ];
  return (
    <div>
      {wordProperties.map((word, i) => (
        <p
          key={i}
          style={{
            position: "absolute",
            top: word.top,
            left: word.left,
            color: props.wordList.includes(word.word)
              ? "rgba(0,0,0,1)"
              : "rgba(0,0,0,0.25)",
          }}
        >
          {word.word}
        </p>
      ))}
    </div>
  );
}
