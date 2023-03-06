import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="min-h-screen">
      <div className="flex justify-between items-center pt-12 px-12">
        <a href="/" className="text-3xl">
          home
        </a>
        <h1 className="text-5xl">{workInfo.name}</h1>
        <h2 className="text-3xl">{workInfo.date}</h2>
      </div>
      <Swiper
        style={{ padding: "3rem", height: "60vh", width: "95%" }}
        navigation={true}
        slidesPerView={3}
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
              <img
                style={{ height: "100%", objectFit: "contain" }}
                src={media.link}
              ></img>
              <p className="italic w-full px-2 pt-2">{media.caption}</p>
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
              <p className="italic w-full px-2 pt-2">{media.caption}</p>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="flex justify-center pt-3">
        <div className="w-1/2 text-lg">
          <p className="py-4">
            <span className="font-bold">Technologies Used: </span>{" "}
            {workInfo.technology}
          </p>
          {workInfo.sourceCode ? (
            <a
              href={workInfo.sourceCode}
              className="font-bold underline underline-offset-4 py-4"
            >
              Source Code
            </a>
          ) : null}
          {workInfo.description.map((info) => (
            <div>
              {info.header ? (
                <h3 className="font-bold py-4">{info.header}</h3>
              ) : null}
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
