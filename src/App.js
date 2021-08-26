import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Menubar from './components/Menubar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <HashRouter basename="/">
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        <Menubar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
      </ParallaxProvider>
    </HashRouter>
  );
}

export default App;
