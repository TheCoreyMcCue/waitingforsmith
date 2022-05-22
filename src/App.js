import React from "react";

import {
  About,
  Blog,
  BehindTheSong,
  Error,
  Home,
  Live,
  Lyrics,
  Merch,
  Press,
  StayTuned,
} from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { Navbar } from "./components";

function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Router>
      <Navbar isDesktop={isDesktop} />
      <Routes>
        <Route path="/" element={<Home isDesktop={isDesktop} />} />
        <Route path="/about" element={<About />} />
        <Route path="/live" element={<Live />} />
        <Route path="/press" element={<Press />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="/bts" element={<BehindTheSong />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/staytuned" element={<StayTuned />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
