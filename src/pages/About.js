import React, { useEffect, useState } from "react";
import useContentful from "./content/useContentful";

import { Container, Box, Typography } from "@mui/material";

const About = () => {
  const [aboutData, setaboutData] = useState([]);
  const { getAboutPage } = useContentful();
  console.log("data", aboutData[0]?.aboutImage?.fields.file?.url)

  useEffect(() => {
    getAboutPage().then((data) => setaboutData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ padding: "none" }}>
      <Box>
        {/* <img style={{ height: "100vh", width: "100vw", overflow: "hidden" }} alt="" src={aboutData[0]?.aboutImage?.fields.file?.url} /> */}
        <Typography style={{
          marginTop: "8%", fontSize: "2.5rem", color: "white", opacity: "65%", backgroundPositionX: "40%", backgroundPositionY: "20%", backgroundImage: `url(${aboutData[0]?.aboutImage?.fields.file?.url})`
        }
        }> {aboutData[0]?.aboutMain}</Typography>
      </Box>
    </Container >
  );
};

export default About;
