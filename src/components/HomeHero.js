import React from "react";

import ReactPlayer from "react-player";

import BasicModal from "./Modal";

const HomeHero = ({ isDesktop }) => {
  return (
    <div>
      {isDesktop ? (
        <ReactPlayer
          height="100vh"
          width="100vw"
          loop={true}
          url="https://www.youtube.com/watch?v=YFDGCEui-mk"
          muted={true}
          playing={true}
        />
      ) : (
        <img
          src="https://www.waitingforsmith.co.uk/uploads/2018/07/WAITING_FOR_SMITH_GS-1680.jpg-lower-res.jpg"
          alt="waiting for smith"
          style={{ height: "auto", width: "100vw" }}
        />
      )}
      <BasicModal isDesktop={isDesktop} />
    </div>
  );
};

export default HomeHero;
