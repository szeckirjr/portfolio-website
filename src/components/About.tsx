import { Heading, HStack, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <HStack bg="gray.800" justify="space-evenly" h="100vh" w="100vw">
            <Heading id="about">About</Heading>
            <Text w="50vw">Originally from Porto Alegre, Brazil, I am now based in Victoria, B.C., where I go to the University of Victoria. I am currently entering my 4th year in Software Engineering. I have completed two co-op terms so far (4-month paid internships) and have gained experience with web development and data analysis, using tools such as HTML, CSS, JavaScript, Python, SQL, etc.</Text>
        </HStack>
    );
}