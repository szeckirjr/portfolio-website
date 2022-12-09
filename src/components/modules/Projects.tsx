import { Flex, Heading, VStack } from '@chakra-ui/react';
import { projectData } from '../../docs/ProjectData';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import NewProjectCard from '../projects/ProjectCard';

export default function Projects(): JSX.Element {
  const [idxOpen, setIdxOpen] = useState(-1);

  const listOfProjects = projectData.map((project, idx) => (
    <NewProjectCard
      project={project}
      key={idx}
      index={idx}
      indexOpen={idxOpen}
      setIndexOpen={setIdxOpen}
      last={projectData.length - 1}
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
      {/* <VStack w={['95%', '90%', '85%', '80%']} px={2}> */}
      <Flex
        wrap="wrap"
        // gap={4}
        w={['95%', '90%', '85%', '80%']}
        justify="center"
        flexDir="column"
        align="center"
      >
        {listOfProjects}
      </Flex>
      {/* </VStack> */}
    </VStack>
  );
}
