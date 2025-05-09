import { Box, Center, Heading, HStack, Image, VStack } from '@chakra-ui/react';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import { Characters as CharactersRequired } from 'react-random-reveal/lib/types';
import { getRandomInt } from '../../docs/FuncLib';

export default function Home({
  colors,
  setColors
}: {
  colors: string[];
  setColors: (val: string[]) => void;
}): JSX.Element {
  const [imgSrc, setImgSrc] = useState(
    [
      process.env.PUBLIC_URL,
      '/memojis/memoji',
      String(getRandomInt(1, 6)),
      '.png'
    ].join('')
  );

  const handleClick = () => {
    setImgSrc(
      [
        process.env.PUBLIC_URL,
        '/memojis/memoji',
        String(getRandomInt(1, 6)),
        '.png'
      ].join('')
    );
    setColors(randomColor({ count: 2, luminosity: 'light' }));
  };

  const charSet: Array<string> =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@%$#&*'.split(
      ''
    );

  return (
    <>
      <Center
        id="home"
        bg="#303030"
        h="100vh"
        style={{ scrollSnapAlign: 'start' }}
      >
        <HStack w="full">
          <VStack spacing={8} w="full">
            <Box
              bgGradient={`linear(to-b, ${colors[0]}, ${colors[1]})`}
              w="full"
              justifyItems="center"
            >
              <Image
                id={`memoji-${imgSrc}`}
                cursor="pointer"
                boxSize="230px"
                // minW="100vw"
                objectFit={'contain'}
                onClick={handleClick}
                src={imgSrc}
                transition="all 0.6s cubic-bezier(1,-0.85,0,1.92)"
                style={{
                  WebkitTransition: 'all 0.6s cubic-bezier(1,-0.85,0,1.92)',
                  MozTransition: 'all 0.6s cubic-bezier(1,-0.85,0,1.92)'
                }}
              />
            </Box>
            <Heading id="home" color="gray.200" size="3xl" px={3}>
              <RandomReveal
                characters="Hello, I'm Eduardo"
                isPlaying
                duration={1.3}
                revealDuration={0.9}
                revealEasing="easeOutQuad"
                characterSet={charSet as CharactersRequired}
              />
            </Heading>
            <Heading color={colors[1]} px={3}>
              <RandomReveal
                characters="Software Engineer & Developer"
                isPlaying
                duration={2.3}
                revealDuration={0.9}
                revealEasing="easeOutQuad"
                characterSet={charSet as CharactersRequired}
              />
            </Heading>
          </VStack>
        </HStack>
      </Center>
    </>
  );
}
