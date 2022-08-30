import Menubar from './modules/Menubar';
import React, { useState } from 'react';
import Contact from './modules/Contact';
import Experience from './modules/Experience';
import Home from './modules/Home';
import Projects from './modules/Projects';
import randomColor from 'randomcolor';
import { Box, VStack } from '@chakra-ui/react';

export function PortfolioWebsite(): JSX.Element {
  const [colors, setColors] = useState(randomColor({ count: 2 }));
  return (
    <Box id="home">
      <Menubar
        currPage=""
        setCurrPage={() => {
          console.log('wow');
        }}
      />
      <Home colors={colors} setColors={setColors} />
      <VStack mx="auto" spacing={0} borderRadius="md">
        <Projects />
        <Experience />
        <Contact colors={colors} setColors={setColors} />
      </VStack>
    </Box>
  );
}
