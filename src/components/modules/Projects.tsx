import { Flex, Heading, VStack } from '@chakra-ui/react';
import { projectData } from '../../docs/ProjectData';
import { ProjectCard } from '../projects/ProjectCard';
import React from 'react';

export default function Projects(): JSX.Element {
  const listOfProjects = projectData.map((project, idx) => (
    <ProjectCard key={idx} index={idx} project={project} />
  ));

  return (
    <VStack w="100%" bg="#303030" spacing={1} id="projects">
      <Heading color="white" size="2xl">
        Projects
      </Heading>
      <Flex wrap="wrap" justify="space-evenly" alignContent="flex-start">
        {listOfProjects}
      </Flex>
    </VStack>
  );
}
