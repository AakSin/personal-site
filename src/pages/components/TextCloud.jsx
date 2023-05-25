import React from "react";

export default function TextCloud(props) {
  const wordProperties = [
    {
      word: "hardware",
      size: 1,
    },
    {
      word: "electronics",
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
      word: "music",
      size: 1,
    },
    {
      word: "sound",
      size: 1,
    },
    {
      word: "performance",
      size: 1,
    },
    {
      word: "augmented reality",
      size: 1,
    },
    {
      word: "new media",
      size: 1,
    },
    {
      word: "virtual reality",
      size: 1,
    },
    {
      word: "immersive",
      size: 1,
    },
    {
      word: "transmedia",
      size: 1,
    },
    ,
    {
      word: "audio reactive",
      size: 1,
    },
    {
      word: "installation",
      size: 1,
    },
    {
      word: "light",
      size: 1,
    },
    {
      word: "web",
      size: 1,
    },
    {
      word: "visualizers",
      size: 1,
    },
    {
      word: "artificial intelligence",
      size: 1,
    },
    { word: "interconnected", size: 0.9 },
  
  ];
  return (
    <div>
      {wordProperties.map((word, i) => (
        <p
          key={i}
          className="text-cloud"
          style={{
            position: "absolute",
            fontSize: word.size + "rem",
            top: props.randomNumbers[i] * (window.innerHeight - 50),
            left:
              props.randomNumbers[i + wordProperties.length] *
              (window.innerWidth > 768
                ? (window.innerWidth - 50) / 2
                : window.innerWidth - 50),
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
