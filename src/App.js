import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
// import Menubar from './components/Menubar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
      <ParallaxProvider>
        <ChakraProvider theme={theme}>
          {/* <Menubar /> */}
          <Home />
          <Projects />
          <Experience />
          <About />
          <Contact />
        </ChakraProvider>
      </ParallaxProvider>
  );
}

export default App;
