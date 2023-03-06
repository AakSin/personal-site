import React from "react";
import Profile from "./profile.jpg";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img src={Profile} className="w-1/2 md:w-2/5"></img>
      <div className="w-3/4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          nulla imperdiet, pharetra nunc et, vestibulum nisi. Nullam tincidunt
          euismod magna, ac facilisis arcu congue in. Mauris sit amet
          pellentesque metus. Suspendisse potenti. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Cras
          gravida diam ac sapien porta eleifend.
        </p>
        <p>
          Etiam id convallis lorem. Maecenas eleifend ex id dolor elementum
          vestibulum. Praesent ultrices purus vel dolor molestie, non tempus
          massa tempus. In feugiat lorem ac dolor interdum, sed feugiat ipsum
          mattis. Aliquam efficitur feugiat quam, ac laoreet quam porttitor in.
          Proin eget justo eget tortor vehicula tristique id a velit. Donec a
          leo nibh. In porttitor mi ac urna faucibus, eget interdum sapien
          dapibus. Praesent eleifend ligula ut nunc feugiat malesuada.
        </p>
        <a href="#" className="font-bold underline underline-offset-4">
          GitHub
        </a>{" "}
        <a href="#" className="font-bold underline underline-offset-4">
          Instagram
        </a>
      </div>
    </div>
  );
}
