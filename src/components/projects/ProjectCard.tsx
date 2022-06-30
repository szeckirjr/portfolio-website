import {
  Heading,
  VStack,
  Text,
  Tag,
  HStack,
  useDisclosure,
  Image,
  useMediaQuery,
  Box,
  Divider,
  Button,
} from '@chakra-ui/react';
import randomColor from 'randomcolor';
import { Project } from '../../docs/ProjectData';
import ProjectModal from './ProjectModal';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';
import CheckGitHubRepoButton from './CheckGitHubRepoButton';

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargeScreen] = useMediaQuery('(min-width: 650px)');

  const colors = randomColor({
    alpha: 0.8,
    format: 'rgba',
    luminosity: 'dark',
    count: project.tags.length,
  });

  const tagList = project.tags.map(tag => (
    <Tag my={2} color="white" bg={colors[project.tags.indexOf(tag)]}>
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
          <Heading size="2xl">{project.title}</Heading>
          <Text
            textAlign={index % 2 !== 0 && isLargeScreen ? 'right' : 'left'}
            fontSize="2xl"
          >
            {project.short_description}
          </Text>
        </VStack>
        <CheckGitHubRepoButton repo_url={project.github_url} />
        <HStack wrap="wrap" justifyContent="center">
          {tagList}
        </HStack>
      </VStack>

      {index % 2 !== 0 && isLargeScreen && (
        <Image
          borderRadius="lg"
          shadow="dark-lg"
          p={5}
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
      width="90%"
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
