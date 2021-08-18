import { Button, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default function Menubar(): JSX.Element {

    type title = "Home" | "About" | "Experience" | "Projects" | "Contact";
    const pages = ["Home", "About", "Experience", "Projects", "Contact"];

    function createButton(title: title) {
        return  <Link to={"/"+title.toLowerCase()}>
                <Button
                    colorScheme="whiteAlpha"
                    color="white"
                    size="lg"
                    variant="ghost"
                >
                    {title}
                </Button>
            </Link>;
    }

    const listOfButtons: JSX.Element[] = pages.map((title) => createButton(title as title));

    return (
        <Flex shadow="xl" p={3} position="fixed" zIndex="2" w="100vw" bg="#303030" justify="center">
            {listOfButtons}
        </Flex>
    )
}