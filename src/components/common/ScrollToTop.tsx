import { ChevronUpIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { useEffect } from "react";
import React from "react";

export function ScrollToTop({ color }: { color: string }): JSX.Element {
    
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };

  useEffect(() => {
    const docRef = document.documentElement || document.body;
    const button = document.getElementById("scroll-to-top");

    const onScroll = () => {
      if (button) {
        if (docRef.scrollTop > 300) {
          button.style.setProperty("bottom", "5");
        } else {
          button.style.setProperty("bottom", "-16");
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      position="fixed"
      right={5}
      bottom={5}
      id="scroll-to-top"
      transition="all 0.4s ease-in-out"
      //   opacity={0}
      onClick={scrollToTop}
    >
      <IconButton
        bgColor={color}
        isRound
        py={6}
        scale={1.1}
        icon={<ChevronUpIcon boxSize={12} />}
        aria-label="Scroll to top"
      >
        Scroll
      </IconButton>
    </Box>
  );
}
