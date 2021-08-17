import { Button, Flex } from "@chakra-ui/react";

export default function Menubar(): JSX.Element {

    const titleAndIDs = {
        "Home": "top",
        "About": "about",
        "Experience": "experience",
        "Project": "project",
        "Contact": "contact"
    };

    type title = "Home" | "About" | "Experience" | "Project" | "Contact";

    function createButton(title: title) {
        return <a href={"#"+titleAndIDs[title]}>
                <Button colorScheme="gray.50" size="lg" variant="ghost">
                    {title}
                </Button>
            </a>;
    }

    const listOfButtons: JSX.Element[] = Object.keys(titleAndIDs).map((title) => createButton(title as title));

    return (
        <Flex shadow="xl" p={3} position="fixed" w="100vw" bg="#303030" justify="center">
            {listOfButtons}
        </Flex>
    )
}