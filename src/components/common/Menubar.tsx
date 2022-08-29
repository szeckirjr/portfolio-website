import { Button, Flex, IconButton, useMediaQuery } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import {
  BsFillPersonFill,
  BsBriefcaseFill,
  BsFolderFill,
} from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import React from "react";

export default function Menubar({
  currPage,
  setCurrPage,
}: {
  currPage: string;
  setCurrPage: (val: string) => void;
}): JSX.Element {
  type PageTitle = "Home" | "About" | "Experience" | "Projects" | "Contact";
  const pages = ["Home", "About", "Experience", "Projects", "Contact"];
  const pageIcons = {
    Home: <HiHome />,
    About: <BsFillPersonFill />,
    Experience: <BsBriefcaseFill />,
    Projects: <BsFolderFill />,
    Contact: <AiFillPhone />,
  };

  const [isLargeScreen] = useMediaQuery("(min-width: 720px)");

  function createButton(title: PageTitle) {
    console.log(
      // location.pathname,
      title,
      // location.pathname === '/' + title.toLowerCase()
    );
    return isLargeScreen ? (
      <Button
        colorScheme="whiteAlpha"
        color="white"
        bgColor={"whiteAlpha.200"}
        size="lg"
        rounded="2xl"
        variant="ghost"
        leftIcon={pageIcons[title]}
        ml={5}
      >
        {title}
      </Button>
    ) : (
      <IconButton
        aria-label={title}
        colorScheme="whiteAlpha"
        color="white"
        bgColor={"whiteAlpha.200"}
        size="lg"
        rounded="2xl"
        variant="ghost"
        icon={pageIcons[title]}
        ml={3}
      />
    );
  }

  const listOfButtons: JSX.Element[] = pages.map(title =>
    createButton(title as PageTitle)
  );

  return (
    <Flex
      p={3}
      position="fixed"
      zIndex={4}
      w="100%"
      justify="center"
      bgColor={"rgba(48, 48, 48, 0.96)"}
    >
      {listOfButtons}
    </Flex>
  );
}
