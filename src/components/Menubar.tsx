import { Button, Flex, IconButton, useMediaQuery } from '@chakra-ui/react';
import { HiHome } from 'react-icons/hi';
import {
  BsFillPersonFill,
  BsBriefcaseFill,
  BsFolderFill,
} from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';

export default function Menubar({
  currPage,
  setCurrPage,
}: {
  currPage: string;
  setCurrPage: (val: string) => void;
}): JSX.Element {
  type PageTitle = 'Home' | 'About' | 'Experience' | 'Projects' | 'Contact';
  const pages = ['Home', 'About', 'Experience', 'Projects', 'Contact'];
  const pageIcons = {
    Home: <HiHome />,
    About: <BsFillPersonFill />,
    Experience: <BsBriefcaseFill />,
    Projects: <BsFolderFill />,
    Contact: <AiFillPhone />,
  };

  const [isLargeScreen] = useMediaQuery('(min-width: 720px)');

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
            bgColor={
              // location.pathname === '/' + title.toLowerCase()
                // ? '#282828'
                // : location.pathname === '/' && title === 'Home'
                // ? '#282828'
                'transparent'
            }
            size="lg"
            variant="ghost"
            leftIcon={pageIcons[title]}
          >
            {title}
          </Button>
        ) : (
          <IconButton
            aria-label={title}
            colorScheme="whiteAlpha"
            color="white"
            bgColor={
              // location.pathname === '/' + title.toLowerCase()
                '#282828'
                // : undefined
            }
            size="lg"
            variant="ghost"
            icon={pageIcons[title]}
          />
        );
  }

  const listOfButtons: JSX.Element[] = pages.map(title =>
    createButton(title as PageTitle)
  );

  return (
    <Flex
      shadow="xl"
      p={3}
      position="fixed"
      zIndex={4}
      w="100%"
      bg="#303030"
      justify="space-evenly"
    >
      {listOfButtons}
    </Flex>
  );
}
