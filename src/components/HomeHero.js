import ReactPlayer from "react-player";

import BasicModal from "./Modal";

const HomeHero = ({ isDesktop, homePageData, popUpData }) => {

  return (
    <div>
      {isDesktop ? (
        <ReactPlayer
          height="100vh"
          width="auto"
          loop={true}
          url={homePageData[0]?.topVideo?.fields?.file?.url}
          muted={true}
          playing={true}
        />
      ) : (
        <img
          src={homePageData[0]?.backUpPhoto?.fields?.file?.url}
          alt="waiting for smith"
          style={{
            height: "50vh",
            width: "100vw",
            zIndex: "-1",
            // zoom: "1.5",
            // position: "relative",
            // left: "-80px",
          }}
        />
      )}
      <BasicModal isDesktop={isDesktop} popUpData={popUpData} />
    </div>
  );
};

export default HomeHero;
