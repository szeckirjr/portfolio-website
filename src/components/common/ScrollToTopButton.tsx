import { ArrowUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function ScrollToTopButton({
  colors
}: {
  colors: string[];
}): JSX.Element {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (document.documentElement || document.body).scrollTop;
      if (scrollTop > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <IconButton
      id="scroll-to-top-btn"
      aria-label="Scroll to top"
      icon={<ArrowUpIcon />}
      bgGradient={`linear(to-b, ${colors[0]}, ${colors[1]})`}
      position="fixed"
      _hover={{}}
      _active={{}}
      onMouseEnter={e => ((e.target as HTMLDivElement).style.scale = '1.2')}
      onMouseLeave={e => ((e.target as HTMLDivElement).style.scale = '1')}
      opacity={show ? 1 : 0}
      transition="all 0.3s ease-in-out"
      style={{
        WebkitTransition: 'all 0.3s ease-in-out',
        MozTransition: 'all 0.3s ease-in-out'
      }}
      bottom="5"
      right="5"
      size="lg"
      isRound
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
}
