import React from "react";
import Profile from "./profile.jpg";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col px-8">
      <img src={Profile} alt="portfolio" className="w-3/4 md:w-2/5"></img>
      <div className="w-5/6 md:w-3/4 pb-4">
        <p className="pt-8">
          Aakarsh Singh (he/they) is a software engineer and new media artist
          hailing originally from India but now settled in the United Arab
          Emirates. They study interactive media along with computer science,
          art history and sound-music computing between New York University's
          Abu Dhabi, Berlin, and New York campuses.
        </p>
        <p className="pt-4 pb-2">
          With their studies in Interactive Media, they work between virtual
          reality, augmented reality, artificial intelligence, sound-light
          installations, and inter-connected multimedia websites. They aim to
          explore post-colonial identity by delving into the recesses of memory
          - both personal and communal. This disintegration and fragmentation of
          memory is expressed in a visual style equally ephemeral, transient,
          and fractured.
        </p>
        <a
          href="./Aakarsh_Singh_Resume_080225.pdf"
          target="_blank"
          rel="noreferrer"
          className="pr-2 font-bold underline underline-offset-4"
        >
          Resume
        </a>
        <a
          href="mailto:aakarsh@nyu.edu"
          target="_blank"
          rel="noreferrer"
          className="pr-2 font-bold underline underline-offset-4"
        >
          Email
        </a>
        <a
          href="https://github.com/AakSin"
          target="_blank"
          rel="noreferrer"
          className="pr-2 font-bold underline underline-offset-4"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
