import { Button, Flex, IconButton, useMediaQuery } from '@chakra-ui/react';
import { HiHome } from 'react-icons/hi';
import {
  BsFillPersonFill,
  BsBriefcaseFill,
  BsFolderFill,
} from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import React from 'react';

export default function Menubar({
  currPage,
  setCurrPage,
}: {
  currPage: string;
  setCurrPage: (val: string) => void;
}): JSX.Element {
  type PageTitle = 'Home' | 'Experience' | 'Projects' | 'Contact';
  const pages = ['Home', 'Projects', 'Experience', 'Contact'];
  const pageIcons = {
    Home: <HiHome />,
    About: <BsFillPersonFill />,
    Experience: <BsBriefcaseFill />,
    Projects: <BsFolderFill />,
    Contact: <AiFillPhone />,
  };

  const [isLargeScreen] = useMediaQuery('(min-width: 720px)');

  function createButton(title: PageTitle, idx: number): JSX.Element {
    return isLargeScreen ? (
      <Button
        key={idx}
        colorScheme="whiteAlpha"
        color="white"
        size="lg"
        variant="ghost"
        leftIcon={pageIcons[title]}
        onClick={() =>
          document
            .getElementById(`${title.toLowerCase()}`)
            ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        {title}
      </Button>
    ) : (
      <IconButton
        key={idx}
        aria-label={title}
        colorScheme="whiteAlpha"
        color="white"
        bgColor={'#282828'}
        size="lg"
        variant="ghost"
        icon={pageIcons[title]}
      />
    );
  }

  const listOfButtons: JSX.Element[] = pages.map((title, idx) =>
    createButton(title as PageTitle, idx)
  );

  return (
    <Flex
      bgGradient={`linear(to-t, transparent, #303030)`}
      p={3}
      position="fixed"
      zIndex={4}
      w="100%"
      justify="space-evenly"
    >
      {listOfButtons}
    </Flex>
  );
}
