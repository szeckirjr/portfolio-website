import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Experience } from '../../docs/ExperienceData';
import ExperienceModal from './ExperienceModal';
import React from 'react';

export default function WorkTimelineElement({
  title,
  subtitle,
  description,
  color,
  range,
  icon
}: Experience): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: color, color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  ' + color }}
      date={range}
      iconStyle={{
        background: color,
        color: '#fff'
      }}
      icon={icon}
      // onTimelineElementClick={onOpen}
      // style={{ cursor: 'pointer' }}
    >
      <HStack>
        <Box flexGrow={10}>
          <Heading
            className="vertical-timeline-element-title"
            as="h3"
            fontWeight="bold"
            size="md"
          >
            {title}
          </Heading>
          <Text
            className="vertical-timeline-element-subtitle"
            as="h4"
            fontSize="1.25em"
          >
            {subtitle}
          </Text>
        </Box>
        {/* <IconButton
          isRound
          bgColor={color}
          filter="contrast(130%)"
          aria-label="More info"
          onClick={onOpen}
          icon={<InfoOutlineIcon />}
          shadow="lg"
        /> */}
      </HStack>
      {/* <ExperienceModal
        isOpen={isOpen}
        onClose={onClose}
        experience={{ title, subtitle, description, color, range, icon }}
      /> */}
    </VerticalTimelineElement>
  );
}
