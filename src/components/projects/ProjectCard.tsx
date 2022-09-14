import {
  Heading,
  VStack,
  Text,
  Tag,
  HStack,
  Image,
  useMediaQuery,
  Stack,
} from '@chakra-ui/react';
import randomColor from 'randomcolor';
import { Project, TagColors } from '../../docs/ProjectData';
import CheckGitHubRepoButton from './CheckGitHubRepoButton';
import React, { useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import { CharactersRequired } from 'react-random-reveal/lib/types';

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): JSX.Element {
  const charSet: Array<string> =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@%$#&*'.split(
      ''
    );
  const [isLargeScreen] = useMediaQuery('(min-width: 700px)');

  const colors = randomColor({
    alpha: 0.8,
    format: 'rgba',
    luminosity: 'dark',
    count: project.tags.length,
  });

  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const textTop = document
        .getElementById(`project-title-${index}`)
        ?.getBoundingClientRect().top;
      const midLine = window.innerHeight / 2 + 200;
      if (textTop && textTop < midLine) {
        setPlaying(true);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => null);
    };
  }, [index]);

  const tagList = project.tags.map((tag, idx) => (
    <Tag
      key={idx}
      size="lg"
      my={2}
      color="white"
      bg={TagColors[tag] ?? colors[idx]}
    >
      {tag}
    </Tag>
  ));

  const isPortfolio = project.title === 'Portfolio Website';
  const projectImage = (
    <Image
      id={`project-image-${index}`}
      borderRadius="xl"
      shadow="dark-lg"
      p={3}
      width={isLargeScreen ? '60%' : '80%'}
      maxWidth="600px"
      src={
        (project.image && process.env.PUBLIC_URL + project.image) ??
        'https://asia.olympus-imaging.com/content/000101300.jpg'
      }
      onClick={() => isPortfolio && window.open('/')}
      cursor={isPortfolio ? 'pointer' : 'default'}
      onMouseEnter={() =>
        isPortfolio &&
        document
          .getElementById(`project-image-${index}`)
          ?.style.setProperty('scale', '1.05')
      }
      onMouseLeave={() =>
        isPortfolio &&
        document
          .getElementById(`project-image-${index}`)
          ?.style.setProperty('scale', '1')
      }
      transition="all 0.2s ease-in-out"
      style={{
        WebkitTransition: 'all 0.2s ease-in-out',
        MozTransition: 'all 0.2s ease-in-out',
      }}
      objectFit="contain"
    />
  );

  const content = (
    <>
      {(index % 2 === 0 || !isLargeScreen) && projectImage}
      <VStack
        width={isLargeScreen ? '50%' : '100%'}
        p={4}
        h="100%"
        alignItems={
          index % 2 !== 0 && isLargeScreen ? 'flex-end' : 'flex-start'
        }
      >
        <VStack
          w="100%"
          alignItems={
            index % 2 !== 0 && isLargeScreen ? 'flex-end' : 'flex-start'
          }
          flexGrow={1}
        >
          <Image
            src={project.scribble ?? '/scribbles/28.svg'}
            height="3.5em"
            filter={project.scribbleFilter}
          />

          <Heading
            textAlign={index % 2 !== 0 && isLargeScreen ? 'right' : 'left'}
            size="2xl"
            id={`project-title-${index}`}
          >
            <RandomReveal
              characters={project.title}
              isPlaying={playing}
              duration={1.3}
              speed={6}
              revealDuration={0.9}
              revealEasing="easeOutQuad"
              characterSet={charSet as CharactersRequired}
            />
          </Heading>
          <Text
            textAlign={index % 2 !== 0 && isLargeScreen ? 'right' : 'left'}
            fontSize="2xl"
          >
            {project.short_description}
          </Text>
        </VStack>
        <CheckGitHubRepoButton repo_url={project.github_url} />
        <HStack
          wrap="wrap"
          justifyContent={
            index % 2 !== 0 && isLargeScreen ? 'flex-end' : 'flex-start'
          }
        >
          {tagList}
        </HStack>
      </VStack>
      {index % 2 !== 0 && isLargeScreen && projectImage}
    </>
  );

  return (
    <Stack
      direction={isLargeScreen ? 'row' : 'column'}
      m={isLargeScreen ? 0 : 4}
      my={12}
      borderRadius="lg"
      color="white"
      width={isLargeScreen ? '80%' : '100%'}
      justifyContent={isLargeScreen ? 'space-evenly' : 'center'}
    >
      {content}
    </Stack>
  );
}
