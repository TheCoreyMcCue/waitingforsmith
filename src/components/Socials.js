import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Socials = () => {
  return (
    <div
      style={{ display: "flex", width: "100vw", flexDirection: "column", color: "white", justifyContent: "flex-end", }}
    >
      <InstagramIcon />
      <YouTubeIcon />
      <FacebookIcon />
    </div>
  );
};

export default Socials;
