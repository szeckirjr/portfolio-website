import { IconButton } from "@chakra-ui/react";
import tinycolor from "tinycolor2";

type Props = {
    aria_label: string;
    bg: string;
    icon: JSX.Element;
    href: string;
}

export default function SocialMediaButton({ aria_label, bg, icon, href }: Props){
    return <IconButton
                as="a"
                target="_blank"
                href={href}
                aria-label="Open my Linkedin"
                bg={bg}
                icon={icon}
                size="lg"
                fontSize="30px"
                textColor={tinycolor(bg).getBrightness()>200 ? "#282828" : "white"}
                boxSize="70px"
                isRound
            />
}