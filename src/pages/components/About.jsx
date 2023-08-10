import React from "react";
import Profile from "./profile.jpg";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col px-8">
      <img src={Profile} className="w-3/4 md:w-2/5"></img>
      <div className="w-5/6 md:w-3/4 pb-4">
        <p className="pt-8">
          Aakarsh Singh (he/they) is a multi-disciplinary new media artist
          originally from India but now settled in the United Arab Emirates.
          Aakarsh studies Interactive Media along with Sound and Music Computing
          between New York University’s Abu Dhabi, Berlin and New York campuses.
        </p>
        <p className="pt-4">
          Aakarsh grew up interested in both technology and the arts, which led
          them to pursue a major that would allow them to combine these
          initially divulging interests. With their studies in Interactive
          Media, Aakarsh works between virtual reality, augmented reality,
          artificial intelligence, sound-light installations, and interconnected
          multimedia websites. They aim to explore ideas of postcolonial and
          queer identities by pushing at the boundaries of these mediums.
        </p>
        <p className="py-4">
          In their free time they play the guitar, make music, and create
          digital art.
        </p>
        <a
          href="mailto:aakarsh@nyu.edu"
          target="_blank"
          className="font-bold underline underline-offset-4"
        >
          Email
        </a>{" "}
        <a
          href="https://github.com/AakSin"
          target="_blank"
          className="font-bold underline underline-offset-4"
        >
          GitHub
        </a>{" "}
        <a
          href="https://www.instagram.com/aakarsh.2/"
          target="_blank"
          className="font-bold underline underline-offset-4"
        >
          Instagram
        </a>{" "}
        <a
          href="./Aakarsh Singh - resume.pdf"
          target="_blank"
          className="font-bold underline underline-offset-4"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
