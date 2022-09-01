import React, { useRef } from "react";
import ReactPlayer from "react-player";

import BasicModal from "./Modal";

const HomeHero = ({ isDesktop, homePageData, popUpData }) => {
  const player = useRef(null);

  // useEffect(() => {
  //   if (player.current) {
  //     const margin =
  //       (player?.current?.children[0]?.children[0]?.clientWidth -
  //         player?.current?.clientWidth) /
  //       2;
  //     player.current.style.marginLeft = `-${margin}px`;
  //   }
  // }, [player.current]);

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <div ref={player}>
        <ReactPlayer
          height="auto"
          width="auto"
          loop={true}
          url={homePageData[0]?.topVideo?.fields?.file?.url}
          muted={true}
          playing={true}
          style={{ marginLeft: !isDesktop && "-150vw" }}
          playsinline={true}
        />
      </div>
      <BasicModal isDesktop={isDesktop} popUpData={popUpData} />
    </div>
  );
};

export default HomeHero;
