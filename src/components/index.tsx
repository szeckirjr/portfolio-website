import Menubar from './modules/Menubar';
import React, { useState } from 'react';
import About from './modules/About';
import Contact from './modules/Contact';
import Experience from './modules/Experience';
import Home from './modules/Home';
import Projects from './modules/Projects';
import randomColor from 'randomcolor';
import { Box, VStack } from '@chakra-ui/react';

export function PortfolioWebsite(): JSX.Element {
  const [colors, setColors] = useState(randomColor({ count: 2 }));
  return (
    <Box>
      <Menubar
        currPage=""
        setCurrPage={() => {
          console.log('wow');
        }}
      />
      <Home colors={colors} setColors={setColors} />
      <Box
        bgColor="green.300"
        bgGradient={`linear(to-b, ${colors[0]}, ${colors[1]})`}
      >
        <VStack mx="auto" w="98%" spacing={0} borderRadius="md">
          <Projects />
          <About />
          <Experience />
          <Contact colors={colors} setColors={setColors} />
        </VStack>
      </Box>
    </Box>
  );
}
