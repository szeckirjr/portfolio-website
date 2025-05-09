import {
  Box,
  Heading,
  Image,
  Spacer,
  VStack,
  Stack,
  ButtonGroup
} from '@chakra-ui/react';
import { useState } from 'react';
import { Project } from '../../docs/ProjectData';
import CheckDeployButton from './CheckDeployButton';
import CheckGitHubRepoButton from './CheckGitHubRepoButton';
import TagList from './TagList';

const ProjectCard = ({
  project,
  index,
  indexOpen,
  setIndexOpen
}: {
  project: Project;
  index: number;
  indexOpen: number;
  setIndexOpen: (index: number) => void;
}) => {
  const [clientX, setClientX] = useState(null);
  const [clientY, setClientY] = useState(null);

  const handleMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClientX(x);
    setClientY(y);
  };

  const open = indexOpen === index;
  const toggleOpen = () => setIndexOpen(indexOpen === index ? -1 : index);

  return (
    <Box
      cursor="pointer"
      opacity={!open && indexOpen !== -1 ? 0.2 : 1}
      onClick={toggleOpen}
      transition="all 0.5s ease-in-out"
      onMouseMove={handleMouseMove}
      // borderTopRadius={index === 0 ? 16 : 0}
      // borderBottomRadius={index === last ? 16 : 0}
      borderRadius={16}
      bgColor="rgba(255, 255, 255, 0.1)"
      width={
        open
          ? ['100%', '98%', '95%', '90%', '80%']
          : ['90%', '70%', '45%', '40%', '35%']
      }
      position="relative"
      zIndex={1}
      _before={{
        borderRadius: 'inherit',
        content: `""`,
        height: '100%',
        left: 0,
        transition: 'opacity 0.3s ease-in',
        position: 'absolute',
        opacity: 0,
        marginBottom: '1px',
        top: 0,
        width: '100%',
        zIndex: 3,
        background: `radial-gradient(1000px circle at ${clientX}px ${clientY}px, rgba(255,255,255,0.1), transparent 40%)`
      }}
      _after={{
        background: `radial-gradient(500px circle at ${clientX}px ${clientY}px, rgba(255,255,255,1), transparent 40%)`,
        borderRadius: 'inherit',
        content: `""`,
        height: '99%',

        left: 0,
        transition: 'opacity 0.5s ease-in-out',
        position: 'absolute',
        opacity: 0,
        top: 0,
        width: '100%',
        zIndex: -1
      }}
      _hover={{
        _before: {
          opacity: 1
        },
        _after: {
          opacity: 1
        }
      }}
    >
      <VStack
        bgColor="#292929"
        borderRadius="inherit"
        m="2px"
        p={6}
        transition="all 0.5s ease-in-out"
        spacing={4}
        height="100%"
      >
        <Stack w="100%" direction="column" align="baseline" spacing={1}>
          <Heading
            transition="all 0.5s ease-in-out"
            fontSize={open ? '4xl' : '3xl'}
            color="white"
            fontWeight={800}
            id={project.title}
          >
            {project.title}
          </Heading>
          <Spacer />
          <Heading
            transition="all 0.5s ease-in-out"
            fontSize={open ? '2xl' : 'xl'}
            color="white"
            fontWeight={600}
            opacity={0.7}
            textAlign="end"
          >
            {project.date}
          </Heading>
        </Stack>
        <Spacer />
        <Stack
          w="100%"
          direction={open ? 'column' : ['column', 'column', 'row', 'row']}
        >
          <TagList tags={project.tags} showTitle={open} />
          <Spacer />
          <ButtonGroup
            isAttached
            flex="flex"
            flexWrap="wrap"
            gap={1}
            alignSelf={open ? 'start' : 'end'}
            zIndex={4}
          >
            <CheckGitHubRepoButton
              repo_url={project.github_url}
              hideTitle={!open}
            />
            <CheckDeployButton url={project.url} hideTitle={!open} />
          </ButtonGroup>
        </Stack>
        {open && (
          <>
            <Heading
              alignSelf="start"
              color="white"
              fontWeight={400}
              fontSize="xl"
            >
              {project.short_description}
            </Heading>
            <Spacer />
            <Image
              src={project.image}
              alt={project.title}
              w="100%"
              maxW="500px"
              objectFit="cover"
            />
            <Spacer />
            {project.description.map((desc, idx) => (
              <Heading
                key={idx}
                alignSelf="start"
                color="white"
                fontWeight={400}
                fontSize="xl"
              >
                {desc}
              </Heading>
            ))}
          </>
        )}
      </VStack>
    </Box>
  );
};

export default ProjectCard;
