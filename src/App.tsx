import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import Menubar from './components/Menubar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';

function App(): JSX.Element {
  return (
      <ParallaxProvider>
        <ChakraProvider theme={theme}>
          <Menubar currPage='' setCurrPage={() => {
            console.log("wow")
          }} />
          <About />
          <Experience />
          <Contact />
          <Projects />
          <Home />
        </ChakraProvider>
      </ParallaxProvider>
  );
}

export default App;
