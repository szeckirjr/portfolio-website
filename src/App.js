import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import PortfolioWebsite from "./components";

function App () {
  return (
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        {/* <Menubar /> */}
        <PortfolioWebsite />
      </ChakraProvider>
    </ParallaxProvider>
  );
}

export default App;
