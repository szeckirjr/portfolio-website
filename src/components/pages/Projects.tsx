import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { projectData } from "../../docs/ProjectData";
import { ProjectCard } from "../projects/ProjectCard";
import React from "react";

export default function Projects({colors}: {colors: string[]}): JSX.Element {
  const listOfProjects = projectData.map((project, idx) => (
    <ProjectCard key={idx} index={idx} project={project} />
  ));

  return (
    <VStack bg="#303030" spacing={5}>
      <Heading size="2xl" color="white" >Projects</Heading>
      <Box bgGradient={["linear(to-r,", colors[0], ",", colors[1], ")"].join(
        ""
      )} w="100%" h="30px" />
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
