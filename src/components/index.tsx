import { Menubar } from './common/Menubar';
import React, { useState } from 'react';
import Contact from './modules/Contact';
import Experience from './modules/Experience';
import Home from './modules/Home';
import Projects from './modules/Projects';
import randomColor from 'randomcolor';
import { Box, VStack } from '@chakra-ui/react';
import ScrollToTopButton from './common/ScrollToTopButton';

export const PortfolioWebsite = (): JSX.Element => {
  const [colors, setColors] = useState(
    randomColor({ count: 2, luminosity: 'bright' })
  );
  return (
    <Box id="home" overflowX="hidden">
      <Menubar />
      <Home colors={colors} setColors={setColors} />
      <VStack mx="auto" spacing={0} borderRadius="md">
        <Projects />
        <Experience />
        <Contact colors={colors} setColors={setColors} />
      </VStack>
      <ScrollToTopButton colors={colors} />
    </Box>
  );
};
