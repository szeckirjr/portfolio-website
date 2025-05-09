import { Box, Heading, VStack } from '@chakra-ui/react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  devExperienceData,
  otherExperienceData
} from '../../docs/ExperienceData';
import WorkTimelineElement from '../experience/WorkTimelineElement';
import React from 'react';

export default function Experience(): JSX.Element {
  const timelineDevExperience = devExperienceData.map((p, idx) => (
    <WorkTimelineElement key={idx} {...p} />
  ));
  const timelineOtherExperience = otherExperienceData.map((p, idx) => (
    <WorkTimelineElement key={idx} {...p} />
  ));

  return (
    <VStack
      id="experience"
      pl={10}
      pr={10}
      pt={12}
      pb={20}
      spacing={38}
      bg="#303030"
      w="100%"
    >
      <Heading color="white" size="2xl">
        Experience
      </Heading>
      {/* <Text color="white" fontSize="1.25em">
        Click on any element to learn more about my role
      </Text> */}
      <Heading color="gray.50" id="coop-experience">
        Development
      </Heading>
      <Box w="100%">
        <VerticalTimeline>{timelineDevExperience}</VerticalTimeline>
      </Box>
      <Heading color="gray.50" id="other-experience">
        Other
      </Heading>
      <Box w="100%">
        <VerticalTimeline>{timelineOtherExperience}</VerticalTimeline>
      </Box>
    </VStack>
  );
}
