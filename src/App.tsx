import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import Menubar from './components/Menubar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <ChakraProvider theme={theme}>
          <Menubar currPage='' setCurrPage={() => {
            console.log("wow")
          }} />
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
    </BrowserRouter>
  );
}

export default App;
