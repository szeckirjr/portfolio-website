import { Center, HStack, VStack, Image } from '@chakra-ui/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import { FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { SiGoodreads } from 'react-icons/si';
import { getRandomInt } from '../../docs/FuncLib';
import SocialMediaButton from '../contact/SocialMediaButton';
import React from 'react';

export default function Contact({
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

  return (
    <Center
      id="contact"
      bg="#303030"
      w="100%"
      p={12}
      h="100vh"
      style={{ scrollSnapAlign: 'start' }}
    >
      <HStack>
        <VStack spacing={8}>
          <HStack spacing={10}>
            <SocialMediaButton
              aria_label="Open my Linkedin"
              bg={colors[0]}
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/in/eduardo-szeckir/"
            />
            <SocialMediaButton
              aria_label="Open my GitHub"
              bg={colors[0]}
              icon={<ImGithub />}
              href="https://github.com/szeckirjr"
            />
            <SocialMediaButton
              aria_label="Send me an email"
              bg={colors[0]}
              icon={<MdEmail />}
              href="mailto:eszeckirjr@gmail.com"
            />
          </HStack>
          <Image
            cursor="pointer"
            borderRadius="full"
            bgGradient={`linear(to-b, ${colors[0]}, ${colors[1]})`}
            boxSize="230px"
            onClick={handleClick}
            src={imgSrc}
          />
          <HStack spacing={10}>
            <SocialMediaButton
              aria_label="Open my Goodreads"
              bg={colors[1]}
              icon={<SiGoodreads />}
              href="https://www.goodreads.com/user/show/95379777-eduardo-szeckir"
            />
            <SocialMediaButton
              aria_label="Open my Spotify"
              bg={colors[1]}
              icon={<FaSpotify />}
              href="https://open.spotify.com/user/szeckirjr?si=d7a10eebae724c10"
            />
          </HStack>
        </VStack>
      </HStack>
    </Center>
  );
}
