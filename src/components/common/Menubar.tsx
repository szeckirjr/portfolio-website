import { Button, Flex, IconButton, useMediaQuery } from '@chakra-ui/react';
import { HiHome } from 'react-icons/hi';
import {
  BsFillPersonFill,
  BsBriefcaseFill,
  BsFolderFill
} from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';

export const Menubar = (): JSX.Element => {
  type PageTitle = 'Home' | 'Experience' | 'Projects' | 'Contact';
  const pages = ['Home', 'Projects', 'Experience', 'Contact'];
  const pageIcons = {
    Home: <HiHome />,
    About: <BsFillPersonFill />,
    Experience: <BsBriefcaseFill />,
    Projects: <BsFolderFill />,
    Contact: <AiFillPhone />
  };

  const [isLargeScreen] = useMediaQuery('(min-width: 720px)');

  const createButton = (title: PageTitle, idx: number): JSX.Element => {
    const config = {
      key: idx,
      colorScheme: 'whiteAlpha',
      color: 'white',
      size: 'lg',
      variant: 'ghost',
      onClick: () =>
        document
          .getElementById(title.toLowerCase())
          ?.scrollIntoView({ behavior: 'smooth' }),
      flexGrow: 1
    };
    return isLargeScreen ? (
      <Button {...config} leftIcon={pageIcons[title]}>
        {title}
      </Button>
    ) : (
      <IconButton {...config} aria-label={title} icon={pageIcons[title]} />
    );
  };

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
};
