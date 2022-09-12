import React, { useEffect, useState } from "react";
import useContentful from "./content/useContentful";

import { Container, Box, Typography } from "@mui/material";

const About = () => {
  const [aboutData, setaboutData] = useState([]);
  const { getAboutPage } = useContentful();

  useEffect(() => {
    getAboutPage().then((data) => setaboutData(data));
  }, [getAboutPage]);

  return (
    <Container disableGutters={true} style={{ maxWidth: '100vw' }}>
      <Box>
        <img style={{ height: "125%", width: "100vw", position: "absolute", objectFit: "cover", overflow: "hidden", marginTop: "-20vh", opacity: "60%" }} alt="" src={aboutData[0]?.background?.fields.file?.url} />
        <Typography className="text-3xl font-bold" style={{
          fontSize: "2.5rem", color: "#5e5858", position: "absolute", width: "80vw", height: "80vh", padding: "5%", left: "10%"
        }
        }> {aboutData[0]?.aboutMain}</Typography>
      </Box>
    </Container >

  );
};

export default About;
