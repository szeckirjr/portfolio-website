import { Flex, Heading, VStack } from '@chakra-ui/react';
import { projectData } from '../../docs/ProjectData';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import ProjectCard from '../projects/ProjectCard';

export default function Projects(): JSX.Element {
  const [idxOpen, setIdxOpen] = useState(-1);

  const listOfProjects = projectData.map((project, idx) => (
    <ProjectCard
      project={project}
      key={idx}
      index={idx}
      indexOpen={idxOpen}
      setIndexOpen={setIdxOpen}
    />
  ));

  return (
    <VStack w="100%" bg="#303030" spacing={8} id="projects">
      <Heading color="white" size="2xl">
        Projects
      </Heading>
      <Heading color="white" size="md">
        Click to learn more
      </Heading>
      <Flex
        wrap="wrap"
        gap={4}
        w={['95%', '90%', '85%', '80%']}
        justify="center"
        flexDir="row"
        align="stretch"
      >
        {listOfProjects}
      </Flex>
    </VStack>
  );
}
