import React from "react";

export default function TextCloud() {
  const wordProperties = [
    { word: "technology", size: 1, active: true },
    { word: "arts", size: 1, active: false },
  ];
  return (
    <div>
      {wordProperties.map((word, i) => (
        <p
          key={i}
          style={{
            position: "absolute",
            top: Math.random() * window.innerHeight + "px",
            left: (Math.random() * window.innerWidth) / 2 + "px",
            color: word.active ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.25)",
          }}
        >
          {word.word}
        </p>
      ))}
    </div>
  );
}
