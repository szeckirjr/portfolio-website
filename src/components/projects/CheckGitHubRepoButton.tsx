import { Button } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import React from 'react';

type Props = {
  repo_url?: string;
};

export default function CheckGitHubRepoButton({ repo_url }: Props): JSX.Element | null {
  return repo_url ? (
    <Button
      color="white"
      as="a"
      href={repo_url}
      target="_blank"
      leftIcon={<AiFillGithub />}
      rightIcon={<BsArrowUpRight />}
      bg="#595959"
      _hover={{
        bg: '#808080',
      }}
    >
      Check GitHub Repository
    </Button>
  ) : null;
}
