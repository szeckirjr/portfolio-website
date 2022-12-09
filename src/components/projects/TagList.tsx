import { HStack, Text, Icon } from '@chakra-ui/react';
import { ToolTags } from '../../docs/ProjectData';

const TagList = ({
  tags,
  showTitle
}: {
  tags: string[];
  showTitle?: boolean;
}) => {
  return (
    <HStack
      alignSelf={showTitle ? 'start' : 'end'}
      wrap="wrap"
      gap={2}
      spacing={0}
    >
      {tags.map((tag, idx) => (
        <HStack
          key={idx}
          spacing={2}
          py={showTitle ? 1 : 2}
          px={showTitle ? 2 : 4}
          borderRadius={6}
          color="white"
          bgColor={ToolTags[tag]?.color ?? 'blue.300'}
        >
          <Icon
            transition="all 0.5s ease-in-out"
            fontSize={showTitle ? 16 : 20}
            as={ToolTags[tag]?.icon}
          />
          {showTitle && <Text>{tag}</Text>}
        </HStack>
      ))}
    </HStack>
  );
};

export default TagList;
