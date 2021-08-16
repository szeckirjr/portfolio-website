import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Home from './components/Home.tsx';
import About from './components/About.tsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
      <About />
    </ChakraProvider>
  );
}

export default App;
