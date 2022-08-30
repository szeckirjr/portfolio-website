import { Flex } from '@chakra-ui/react';
import { projectData } from '../../docs/ProjectData';
import { ProjectCard } from '../projects/ProjectCard';
import React from 'react';

export default function Projects(): JSX.Element {
  const listOfProjects = projectData.map((project, idx) => (
    <ProjectCard key={idx} index={idx} project={project} />
  ));

  return (
    <Flex
      w="100%"
      bg="#303030"
      wrap="wrap"
      justify="space-evenly"
      alignContent="flex-start"
      pt="100px" // the menubar is 72px in height -> 100px padding on top so that it does not overlap
    >
      {listOfProjects}
    </Flex>
  );
}
