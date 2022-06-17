import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Socials = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", position: "sticky" }}
    >
      <InstagramIcon />
      <YouTubeIcon />
      <FacebookIcon />
    </div>
  );
};

export default Socials;
