import ReactPlayer from "react-player";

import BasicModal from "./Modal";

const HomeHero = ({ isDesktop, homePageData }) => {
  console.log(homePageData[0]?.topVideoLink);

  // useEffect(() => {
  //   getHomePage().then((data) => setHomePageData(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      {isDesktop ? (
        <ReactPlayer
          height="100vh"
          width="100vw"
          loop={true}
          url={homePageData[0]?.topVideoLink}
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
      <BasicModal isDesktop={isDesktop} />
    </div>
  );
};

export default HomeHero;
