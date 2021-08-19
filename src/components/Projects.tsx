import { Flex } from "@chakra-ui/react";
import { projectData } from "../docs/ProjectData";
import { ProjectCard } from "./projects/ProjectCard";

export default function Projects() {
    const listOfProjects = projectData.map((project) => <ProjectCard {...project} />)

    return (
        <Flex
            w="100%"
            h="100vh"
            overflow="scroll"
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