import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-medium-image-zoom";
import "./Zoom.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

import { useParams } from "react-router-dom";

import workData from "../workData.json";

export default function WorkMain() {
  const { name } = useParams();
  const workInfo = workData.data.filter((work) => work.name === name)[0];
  console.log(workInfo);
  return (
    <div className="min-min-h-screen py-12">
      <div className="px-8 md:px-32 ">
        <a href="/" className="text-lg md:text-2xl px-2 md:px-0">
          Home
        </a>
        {/* <div className="w-full"> */}
        <h1 className="text-3xl md:text-5xl text-center px-2 md:px-0">
          {workInfo.name}
        </h1>
        {/* </div> */}
        <h2 className="text-xl md:text-2xl text-center px-2 md:px-0">
          {workInfo.date}
        </h2>
      </div>
      <Swiper
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        style={{ padding: "3rem", height: "60vh", width: "95%" }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper h-1/2"
      >
        {workInfo.media.map((media, key) =>
          media.type === "image" ? (
            <SwiperSlide
              style={{ display: "flex" }}
              className="flex flex-col justify-center items-center p-7"
              key={key}
            >
              <Zoom style={{ height: "100%", objectFit: "contain" }}>
                <img
                  style={{ height: "100%", objectFit: "contain" }}
                  src={media.link}
                  loading="lazy"
                  className="drop-shadow-md hover:drop-shadow-xl"
                ></img>
              </Zoom>
              <p className="italic px-2 pt-2 text-center">{media.caption}</p>
            </SwiperSlide>
          ) : (
            <SwiperSlide
              style={{ display: "flex" }}
              className="flex justify-center items-center p-7 flex-col"
              key={key}
            >
              {/* <YouTubeEmbed link={media.link}></YouTubeEmbed> */}
              <iframe
                style={{ height: "100%", width: "100%" }}
                width="853"
                height="480"
                src={media.link}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <p className="italic px-2 pt-2 text-center">{media.caption}</p>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="flex justify-center pt-3">
        <div className="md:w-1/2 w-5/6 text-lg">
          <p className="py-4">
            <span className="font-bold">Technologies Used: </span>{" "}
            {workInfo.technology}
          </p>
          {workInfo.sourceCode ? (
            <a
              href={workInfo.sourceCode}
              target="_blank"
              className="font-bold underline underline-offset-4 py-4"
            >
              Project Files
            </a>
          ) : null}
          {"    "}
          {workInfo.liveLink ? (
            <a
              href={workInfo.liveLink}
              target="_blank"
              className="font-bold underline underline-offset-4 py-4"
            >
              Project Link
            </a>
          ) : null}
          {workInfo.description.map((info) => (
            <div>
              {info.header ? (
                <h3 className="font-bold pt-4">{info.header}</h3>
              ) : null}
              <p className="py-2">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
