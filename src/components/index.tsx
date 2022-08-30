import Menubar from './modules/Menubar';
import React, { useState } from 'react';
import About from './modules/About';
import Contact from './modules/Contact';
import Experience from './modules/Experience';
import Home from './modules/Home';
import Projects from './modules/Projects';
import randomColor from 'randomcolor';

export function PortfolioWebsite(): JSX.Element {
  const [colors, setColors] = useState(randomColor({ count: 2 }));
  return (
    <>
      <Menubar
        currPage=""
        setCurrPage={() => {
          console.log('wow');
        }}
      />
      <Home colors={colors} setColors={setColors} />
      <Projects />
      <About />
      <Experience />
      <Contact colors={colors} setColors={setColors} />
    </>
  );
}
