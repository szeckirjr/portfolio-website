import { Heading, HStack, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <HStack h="50vh" justify="space-evenly">
            <Heading>About</Heading>
            <Text w="50vw">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eum reiciendis blanditiis magnam eius, aliquam quam fugiat quo ipsum repudiandae quae quidem. Fuga ullam mollitia molestiae ducimus nesciunt quidem inventore.</Text>
        </HStack>
    );
}