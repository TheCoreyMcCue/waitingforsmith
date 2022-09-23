import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Socials = () => {
  return (
    <div
      style={{ display: "flex", width: "100vw", flexDirection: "column", color: "white", justifyContent: "flex-end", }}
    >
      <a href="https://www.instagram.com/waitingforsmith/" target="_blank" rel="noreferrer">
        <InstagramIcon sx={{ fontSize: 35 }} />
      </a>
      <a href="https://www.youtube.com/channel/UCsoTZ8qLcMzfohGDcvpuT3w" target="_blank" rel="noreferrer">
        <YouTubeIcon sx={{ fontSize: 35 }} />
      </a>
      <a href="https://www.facebook.com/waitingforsmith" target="_blank" rel="noreferrer">
        <FacebookIcon sx={{ fontSize: 35 }} />
      </a>
    </div>
  );
};

export default Socials;

// https://www.youtube.com/channel/UCsoTZ8qLcMzfohGDcvpuT3w