import { Button } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { IoMdGlobe } from 'react-icons/io';
import React from 'react';

export default function CheckDeployButton({
  url
}: {
  url?: string;
}): JSX.Element | null {
  return url ? (
    <Button
      color="white"
      as="a"
      href={url}
      target="_blank"
      leftIcon={<IoMdGlobe />}
      rightIcon={<BsArrowUpRight />}
      bg="#595959"
      _hover={{
        bg: '#808080'
      }}
    >
      Check it out
    </Button>
  ) : null;
}
