import {
  Heading,
  VStack,
  Text,
  Tag,
  HStack,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import randomColor from 'randomcolor';
import { Project, TagColors } from '../../docs/ProjectData';
import CheckGitHubRepoButton from './CheckGitHubRepoButton';
import React from 'react';

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): JSX.Element {
  const [isLargeScreen] = useMediaQuery('(min-width: 700px)');

  const colors = randomColor({
    alpha: 0.8,
    format: 'rgba',
    luminosity: 'dark',
    count: project.tags.length,
  });

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

  console.log(process.env.PUBLIC_URL);
  console.log(project.image);

  const content = (
    <>
      {(index % 2 === 0 || !isLargeScreen) && (
        <Image
          borderRadius="lg"
          shadow="dark-lg"
          p={3}
          width={isLargeScreen ? '50%' : '80%'}
          maxWidth="600px"
          src={
            project.image ??
            'https://asia.olympus-imaging.com/content/000101300.jpg'
          }
        />
      )}

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
          >
            {project.title}
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

      {index % 2 !== 0 && isLargeScreen && (
        <Image
          borderRadius="lg"
          shadow="dark-lg"
          p={3}
          width={isLargeScreen ? '60%' : '80%'}
          maxWidth="500px"
          src={
            (project.image && process.env.PUBLIC_URL + project.image) ??
            'https://asia.olympus-imaging.com/content/000101300.jpg'
          }
        />
      )}
    </>
  );

  return isLargeScreen ? (
    <HStack
      my={10}
      borderRadius="lg"
      color="white"
      width="80%"
      justifyContent="space-evenly"
    >
      {content}
    </HStack>
  ) : (
    <VStack
      m={15}
      borderRadius="lg"
      color="white"
      width="100%"
      justifyContent="center"
    >
      {content}
    </VStack>
  );
}
