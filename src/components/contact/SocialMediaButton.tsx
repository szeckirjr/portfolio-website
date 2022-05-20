import { IconButton } from '@chakra-ui/react';
import tinycolor from 'tinycolor2';

type Props = {
  aria_label: string;
  bg: string;
  icon: JSX.Element;
  href: string;
};

export default function SocialMediaButton({
  aria_label,
  bg,
  icon,
  href,
}: Props) {
  return (
    <IconButton
      as="a"
      target="_blank"
      href={href}
      aria-label="Open my Linkedin"
      bg={bg}
      onMouseEnter={e => ((e.target as HTMLDivElement).style.scale = '1.2')}
      onMouseLeave={e => ((e.target as HTMLDivElement).style.scale = '1')}
      icon={icon}
      size="lg"
      colorScheme={''} // so the change in color when hovering is deactivated
      fontSize="30px"
      textColor={tinycolor(bg).getBrightness() > 200 ? '#282828' : 'white'}
      boxSize="70px"
      isRound
    />
  );
}
