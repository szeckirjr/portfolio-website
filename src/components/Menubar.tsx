import { Button, Flex, IconButton, useMediaQuery } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi"
import { BsFillPersonFill, BsBriefcaseFill, BsFolderFill } from "react-icons/bs"
import { AiFillPhone } from "react-icons/ai"

export default function Menubar(): JSX.Element {

    type title = "Home" | "About" | "Experience" | "Projects" | "Contact";
    const pages = ["Home", "About", "Experience", "Projects", "Contact"];
    const pageIcons = {
        "Home": <HiHome />,
        "About": <BsFillPersonFill />,
        "Experience": <BsBriefcaseFill />,
        "Projects": <BsFolderFill />,
        "Contact": <AiFillPhone />
    }

    const [isLargeScreen] = useMediaQuery("(min-width: 720px)")

    function createButton(title: title) {
        return <Link to={"/"+title.toLowerCase()}>
            {isLargeScreen ? 
                    <Button
                    colorScheme="whiteAlpha"
                    color="white"
                    size="lg"
                    variant="ghost"
                    leftIcon={pageIcons[title]}
                >
                    {title}
                </Button>
            :
            <IconButton
                aria-label={title}
                colorScheme="whiteAlpha"
                color="white"
                size="lg"
                variant="ghost"
                icon={pageIcons[title]}
            />
            }
                
            </Link>;
    }

    const listOfButtons: JSX.Element[] = pages.map((title) => createButton(title as title));

    return (
        <Flex shadow="xl" p={3} position="fixed" zIndex={4} w="100vw" bg="#303030" justify="space-evenly">
            {listOfButtons}
        </Flex>
    )
}