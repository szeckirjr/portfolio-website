import Menubar from "./modules/Menubar";
import React from "react";
import About from "./modules/About";
import Contact from "./modules/Contact";
import Experience from "./modules/Experience";
import Home from "./modules/Home";
import Projects from "./modules/Projects";

export function PortfolioWebsite(): JSX.Element {
  return (
    <>
      <Menubar
        currPage=""
        setCurrPage={() => {
          console.log('wow');
        }}
      />
      <Home />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
