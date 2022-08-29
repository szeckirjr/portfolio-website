import { Box } from "@chakra-ui/react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React, { useState } from "react";
import randomColor from "randomcolor";
import Menubar from "./common/Menubar";

export default function PortfolioWebsite(): JSX.Element {
  const [colors, setColors] = useState(randomColor({ count: 2 }));
  const [currPage, setCurrPage] = useState("Home");
  return (
    <Box>
      <Menubar currPage={currPage} setCurrPage={setCurrPage} />
      <Home colors={colors} setColors={setColors} />
      <Projects colors={colors} />
      <Experience />
      <About />
      <Contact />
    </Box>
  );
}
