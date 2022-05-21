import React from "react";

import {
  About,
  Blog,
  BTS,
  Error,
  Home,
  Live,
  Lyrics,
  Merch,
  Press,
  StayTuned,
} from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/live" element={<Live />} />
        <Route path="/press" element={<Press />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="/bts" element={<BTS />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/staytuned" element={<StayTuned />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
