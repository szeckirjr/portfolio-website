import { Heading, VStack, Text, Tag, HStack, useDisclosure } from "@chakra-ui/react";
import randomColor from "randomcolor";
import { Project } from "../../docs/ProjectData";
import ProjectModal from "./ProjectModal";

export function ProjectCard({title, description, short_description, tags}: Project) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const colors = randomColor({alpha: 0.5, format: 'rgba', luminosity: 'dark', count:tags.length})

    const tagList = tags.map((tag)=><Tag m={3} color="white" bg={colors[tags.indexOf(tag)]}>{tag}</Tag>)

    return (
        <>
        <VStack
            textAlign="center"
            p={10}
            m={15}
            maxW="400px"
            borderRadius="lg"
            bg="gray.600"
            color="white"
            onClick={onOpen}
            cursor="pointer"
        >
            <Heading size="lg">{title}</Heading>
            <Text>{short_description}</Text>
            <HStack wrap="wrap" justifyContent="space-around">{tagList}</HStack>
        </VStack>
        <ProjectModal isOpen={isOpen} onClose={onClose} project={{title,description,short_description,tags}} />
        </>
    );
}