import { IconButton } from "@chakra-ui/react";
import tinycolor from "tinycolor2";

type Props = {
    aria_label: string;
    bg: string;
    icon: JSX.Element;
}

export default function SocialMediaButton({ aria_label, bg, icon }: Props){
    return <IconButton
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