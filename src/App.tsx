import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { PortfolioWebsite } from './components';

function App(): JSX.Element {
  return (
      <ParallaxProvider>
        <ChakraProvider theme={theme}>
          <PortfolioWebsite />
        </ChakraProvider>
      </ParallaxProvider>
  );
}

export default App;
