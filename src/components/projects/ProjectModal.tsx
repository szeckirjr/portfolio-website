import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Project } from '../../docs/ProjectData';
import CheckGitHubRepoButton from './CheckGitHubRepoButton';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
};

export default function ProjectModal({ isOpen, onClose, project }: Props): JSX.Element {
  const description = project.description.map((d, idx) => (
    <React.Fragment key={idx}>
      {d}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent bg="gray.50">
        <ModalHeader color="gray.900">{project.title}</ModalHeader>
        <ModalCloseButton color="gray.900" />
        <ModalBody pb={6}>
          <Text as="p" color="gray.900">
            {description}
          </Text>
          <CheckGitHubRepoButton repo_url={project.github_url} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
