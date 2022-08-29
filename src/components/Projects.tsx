import { Flex, Heading, VStack } from '@chakra-ui/react';
import { projectData } from '../docs/ProjectData';
import { ProjectCard } from './projects/ProjectCard';

export default function Projects() {
  const listOfProjects = projectData.map((project, idx) => (
    <ProjectCard index={idx} project={project} />
  ));

  return (
    <VStack bg="#303030" spacing={5}>
      <Heading size="2xl" color="white">Projects</Heading>
    <Flex
      w="100%"
      overflow="scroll"
      wrap="wrap"
      justify="space-evenly"
      alignContent="flex-start"
    >
      
      {listOfProjects}
    </Flex>
    </VStack>
  );
}
