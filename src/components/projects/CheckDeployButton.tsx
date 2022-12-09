import { Button, IconButton } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { IoMdGlobe } from 'react-icons/io';
import React from 'react';

export default function CheckDeployButton({
  url,
  hideTitle
}: {
  url?: string;
  hideTitle?: boolean;
}): JSX.Element | null {
  return url ? (
    hideTitle ? (
      <IconButton
        color="white"
        as="a"
        href={url}
        target="_blank"
        aria-label="Check it out"
        icon={<IoMdGlobe size={24} />}
        bg="#595959"
        p={3}
        _hover={{
          bg: '#808080'
        }}
      />
    ) : (
      <Button
        color="white"
        as="a"
        href={url}
        target="_blank"
        leftIcon={<IoMdGlobe size={hideTitle ? 24 : 18} />}
        rightIcon={!hideTitle && <BsArrowUpRight />}
        bg="#595959"
        _hover={{
          bg: '#808080'
        }}
      >
        {!hideTitle && 'Check it out'}
      </Button>
    )
  ) : null;
}
