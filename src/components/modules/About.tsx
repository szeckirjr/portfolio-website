import { Heading, VStack, Image, Center, Box } from '@chakra-ui/react';
import randomColor from 'randomcolor';
import { useController } from 'react-scroll-parallax';
import tinycolor from 'tinycolor2';
import React from 'react';

export default function About(): JSX.Element {
  const { parallaxController } = useController();

  let randCol = randomColor({ luminosity: 'bright' });
  while (tinycolor(randCol).getBrightness() < 200) {
    randCol = randomColor({ luminosity: 'bright' });
  }
  return (
    <Center w="100%" bg="#303030" color="white" pl={10} pr={10} pt={40} pb={20}>
      <VStack spacing={38} align="flex-start" w="50vw" minW="300px">
        <Heading zIndex={2} size="2xl">
          About
        </Heading>
        <Heading zIndex={2} size="xl">
          This is me:
        </Heading>
        <Image
          position="relative"
          maxH="400px"
          src={process.env.PUBLIC_URL + '/babyself.JPG'}
          mb={32}
          onLoad={() => parallaxController.update()}
        />
        <Heading zIndex={2} size="xl">
          Ok this WAS me some years ago
        </Heading>
        <Heading zIndex={2} size="xl">
          Nowadays I look more like this:
        </Heading>
        <Image
          maxH="400px"
          src={process.env.PUBLIC_URL + '/currentself.JPG'}
          onLoad={() => parallaxController.update()}
        />
        <Heading zIndex={2} size="xl">
          I was born and raised in{' '}
          <Box as="span" color={randCol}>
            Porto Alegre
          </Box>
          , a city in the southernmost state in Brazil
        </Heading>
        <Image
          maxH="400px"
          src={process.env.PUBLIC_URL + '/poamap.jpg'}
          onLoad={() => parallaxController.update()}
        />
        <Heading zIndex={2} size="xl">
          {' '}
          In 2018, I moved to Victoria, B.C., to go to the{' '}
          <Box as="span" color={randCol}>
            University of Victoria
          </Box>
        </Heading>
        <Image
          maxH="400px"
          src={process.env.PUBLIC_URL + '/uvicself.jpg'}
          onLoad={() => parallaxController.update()}
        />

        <Heading zIndex={2} size="xl">
          Now, I am currently entering my{' '}
          <Box as="span" color={randCol}>
            4th year in Software Engineering
          </Box>
          <br />
          <br />I have completed{' '}
          <Box as="span" color={randCol}>
            three co-op terms
          </Box>{' '}
          so far and have gained experience with{' '}
          <Box as="span" color={randCol}>
            web development
          </Box>{' '}
          and{' '}
          <Box as="span" color={randCol}>
            data analysis
          </Box>
        </Heading>
      </VStack>
    </Center>
  );
}
