import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  coopExperienceData,
  otherExperienceData,
} from '../docs/ExperienceData';
import WorkTimelineElement from './experience/WorkTimelineElement';

export default function Experience() {
  const timelineCoopExperience = coopExperienceData.map(p => (
    <WorkTimelineElement {...p} />
  ));
  const timelineOtherExperience = otherExperienceData.map(p => (
    <WorkTimelineElement {...p} />
  ));

  return (
    <VStack pl={10} pr={10} pt={40} pb={20} spacing={38} bg="#303030">
      <Heading size="2xl" color="white">Experience</Heading>
      <Text color="white" fontSize="1.25em">
        Click on any element to learn more about my role
      </Text>
      <Heading color="gray.50" id="coop-experience">
        Co-Op Experience
      </Heading>
      <Box w="100vw">
        <VerticalTimeline>{timelineCoopExperience}</VerticalTimeline>
      </Box>
      <Heading color="gray.50" id="other-experience">
        Other Experience
      </Heading>
      <Box w="100vw">
        <VerticalTimeline>{timelineOtherExperience}</VerticalTimeline>
      </Box>
    </VStack>
  );
}
