import { Center, Heading, HStack, Image, VStack } from '@chakra-ui/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import { CharactersRequired } from 'react-random-reveal/lib/types';
import { getRandomInt } from '../../docs/FuncLib';
import React from 'react';

export default function Home({
  colors,
  setColors,
}: {
  colors: string[];
  setColors: (val: string[]) => void;
}): JSX.Element {
  const [imgSrc, setImgSrc] = useState(
    [
      process.env.PUBLIC_URL,
      '/memojis/memoji',
      String(getRandomInt(1, 6)),
      '.png',
    ].join('')
  );

  const handleClick = () => {
    setImgSrc(
      [
        process.env.PUBLIC_URL,
        '/memojis/memoji',
        String(getRandomInt(1, 6)),
        '.png',
      ].join('')
    );
    setColors(randomColor({ count: 2 }));
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
        p="20px"
        h="100vh"
        style={{ scrollSnapAlign: 'start' }}
      >
        <HStack>
          <VStack spacing={8}>
            <Image
              cursor="pointer"
              bgGradient={`linear(to-b, ${colors[0]}, ${colors[1]})`}
              boxSize="230px"
              minW="100vw"
              objectFit={'contain'}
              onClick={handleClick}
              src={imgSrc}
            />
            <Heading id="home" color="gray.200" size="3xl">
              <RandomReveal
                characters="Hello, I'm Eduardo"
                isPlaying
                duration={1.3}
                speed={6}
                revealDuration={0.9}
                revealEasing="easeOutQuad"
                characterSet={charSet as CharactersRequired}
              />
            </Heading>
            <Heading color={colors[1]}>
              <RandomReveal
                characters="Software Engineering student @ UVic"
                isPlaying
                duration={2.3}
                speed={6}
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
