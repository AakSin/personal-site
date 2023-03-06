import React from "react";

export default function TextCloud(props) {
  const wordProperties = [
    {
      word: "technology",
      size: 1,
    },
    {
      word: "arts",
      size: 1,
    },
    {
      word: "technology",
      size: 1,
    },
    {
      word: "arts",
      size: 1,
    },
    {
      word: "technology",
      size: 1,
    },
    {
      word: "arts",
      size: 1,
    },
    {
      word: "technology",
      size: 1,
    },
    {
      word: "arts",
      size: 1,
    },
  ];
  return (
    <div>
      {wordProperties.map((word, i) => (
        <p
          key={i}
          style={{
            position: "absolute",
            top: props.randomNumbers[i] * window.innerHeight,
            left:
              (props.randomNumbers[i + wordProperties.length] *
                window.innerWidth) /
              2,
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
