import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Experience } from '../../docs/ExperienceData';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  experience: Experience;
};

export default function ExperienceModal({
  isOpen,
  onClose,
  experience,
}: Props): JSX.Element {
  const description = experience.description.map((d, idx) => (
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
        <ModalHeader color="gray.900">{experience.title}</ModalHeader>
        <ModalCloseButton color="gray.900" />
        <ModalBody pb={6}>
          <Heading color="gray.900" size="md">
            {experience.subtitle}
          </Heading>
          <Text color="gray.900">{experience.range}</Text>
          <br />
          <Text as="p" color="gray.900">
            {description}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
