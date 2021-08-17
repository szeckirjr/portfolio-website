import { Button, Flex } from "@chakra-ui/react";

export default function Menubar(): JSX.Element {
    const listOfButtons: JSX.Element[] = ["Home", "About", "Experience", "Project", "Contact"].map((title) => {
        return <a href={"#"+title}><Button size="lg" variant="ghost">{title}</Button></a>;
    });

    return (
        <Flex shadow="xl" p={3} position="fixed" w="100vw" bg="#303030" justify="center">
            {listOfButtons}
        </Flex>
    )
}