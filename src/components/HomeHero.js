import React from "react";
import ReactPlayer from "react-player";

import BasicModal from "./Modal";

const HomeHero = ({ isDesktop, homePageData, popUpData }) => {
  // const player = useRef(null);

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
    <>
      <ReactPlayer
        height="auto"
        width="auto"
        loop={true}
        url={homePageData[0]?.topVideo?.fields?.file?.url}
        muted={true}
        playing={true}
        playsinline={true}
        config={{
          file: {
            attributes: {
              style: {
                height: isDesktop ? "100vh" : "calc(100vh - 60px)", objectFit: "cover", width: "100vw"
              }
            }
          }
        }}
      />
      <BasicModal isDesktop={isDesktop} popUpData={popUpData} />
    </>
  );
};

export default HomeHero;
