import {
  Heading,
  VStack,
  Text,
  Tag,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import randomColor from 'randomcolor';
import { Project } from '../../docs/ProjectData';
import ProjectModal from './ProjectModal';

export function ProjectCard({ ...project }: Project) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const colors = randomColor({
    alpha: 0.8,
    format: 'rgba',
    luminosity: 'dark',
    count: project.tags.length,
  });

  const tagList = project.tags.map(tag => (
    <Tag m={3} color="white" bg={colors[project.tags.indexOf(tag)]}>
      {tag}
    </Tag>
  ));

  return (
    <>
      <VStack
        textAlign="center"
        p={10}
        m={15}
        flexGrow={1}
        w="300px"
        borderRadius="lg"
        bg="gray.600"
        color="white"
        onClick={onOpen}
        cursor="pointer"
        onMouseEnter={e => ((e.target as HTMLDivElement).style.scale = '1.05')}
        onMouseLeave={e => ((e.target as HTMLDivElement).style.scale = '1')}
      >
        <Heading size="lg">{project.title}</Heading>
        <Text>{project.short_description}</Text>
        <HStack wrap="wrap" justifyContent="space-around">
          {tagList}
        </HStack>
      </VStack>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        project={{ ...project }}
      />
    </>
  );
}
