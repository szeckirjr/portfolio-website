import { Heading, VStack, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <>
        <VStack id="about" bg="gray.800" justify="space-evenly" h="100vh" minW="100vw" style={{scrollSnapAlign: "start"}}>
            <Heading color="white">About</Heading>
            <Text color="white" w="50vw">Originally from Porto Alegre, Brazil, I am now based in Victoria, B.C., where I go to the University of Victoria. I am currently entering my 4th year in Software Engineering. I have completed two co-op terms so far and have gained experience with web development and data analysis.</Text>
        </VStack>
        </>
    );
}