import { Button, IconButton } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import React from 'react';

type Props = {
  repo_url?: string;
  hideTitle?: boolean;
};

export default function CheckGitHubRepoButton({
  repo_url,
  hideTitle
}: Props): JSX.Element | null {
  return repo_url ? (
    hideTitle ? (
      <IconButton
        color="white"
        as="a"
        href={repo_url}
        target="_blank"
        aria-label="GitHub Repository"
        icon={<AiFillGithub size={24} />}
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
        href={repo_url}
        target="_blank"
        leftIcon={<AiFillGithub size={hideTitle ? 24 : 18} />}
        rightIcon={!hideTitle && <BsArrowUpRight />}
        bg="#595959"
        _hover={{
          bg: '#808080'
        }}
      >
        {!hideTitle && 'GitHub Repository'}
      </Button>
    )
  ) : null;
}
