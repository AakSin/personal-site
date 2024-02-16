import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-medium-image-zoom";
import "./Zoom.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";
import renderData from "../renderData.json";
renderData = renderData.data;

export default function Renders() {
  return (
    <div className="min-min-h-screen py-12">
      <div className="px-8 md:px-32">
        <a href="/" className="text-lg md:text-2xl px-2 md:px-0">
          Home
        </a>
        {/* <div className="w-full"> */}
        <h1 className="text-3xl md:text-5xl text-center px-2 md:px-0">
          Miscellaneous Projects
        </h1>
      </div>
      {renderData.map((render, key) => (
        <div key={key} id={render.id}>
          <div className="flex flex-col justify-center mt-10  text-center">
            <h2 className="text-xl md:text-3xl">{render.name}</h2>
            <h3 className="text-lg md:text-2xl">{render.date}</h3>
          </div>

          <Swiper
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
            style={{ padding: "2rem 0 0.5rem 0", height: "100%", width: "90%" }}
            navigation={true}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper h-1/2"
          >
            {render.media.map((media, key) =>
              media.type === "image" ? (
                <SwiperSlide
                  style={{ display: "flex" }}
                  className="flex flex-col justify-center items-center px-0 "
                  key={key}
                >
                  <Zoom style={{ maxHeight: "100%", objectFit: "contain" }}>
                    <img
                      style={{ maxHeight: "100%", objectFit: "contain" }}
                      src={media.link}
                      alt={media.caption}
                      loading="lazy"
                      className="drop-shadow-md hover:drop-shadow-xl"
                    ></img>
                  </Zoom>
                  <p className="italic px-2 pt-2 text-center">
                    {media.caption}
                  </p>
                </SwiperSlide>
              ) : (
                <SwiperSlide
                  style={{ display: "flex" }}
                  className="flex justify-center items-center  flex-col"
                  key={key}
                >
                  {/* <YouTubeEmbed link={media.link}></YouTubeEmbed> */}
                  <iframe
                    style={{ width: "100%" }}
                    width="853"
                    height="480"
                    src={media.link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  <p className="italic px-2 pt-2 text-center">
                    {media.sourceLink ? (
                      <a
                        href={media.sourceLink}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4"
                      >
                        {media.caption}
                      </a>
                    ) : (
                      media.caption
                    )}
                  </p>
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="flex justify-center pt-4">
            <div className="md:w-1/2 w-5/6 text-lg">
              {render.sourceCode ? (
                <a
                  href={render.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline underline-offset-4 py-4"
                >
                  Project Files
                </a>
              ) : null}
              {"    "}
              {render.liveLink ? (
                <a
                  href={render.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline underline-offset-4 py-4"
                >
                  Project Link
                </a>
              ) : null}
              <div>{render.description}</div>
              <p className="py-4">
                <span className="font-bold">Made Using: </span>{" "}
                {render.technology}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
