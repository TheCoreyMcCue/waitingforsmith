import React, { useEffect, useState } from "react";
import useContentful from "./content/useContentful";

import { Container, Box } from "@mui/material";

const About = () => {
  const [aboutData, setaboutData] = useState([]);
  const { getAboutPage } = useContentful();
  console.log("data", aboutData[0])

  useEffect(() => {
    getAboutPage().then((data) => setaboutData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Box style={{ marginTop: "8%", fontSize: "3rem" }}>{aboutData[0]?.aboutMain}</Box>
    </Container>
  );
};

export default About;
