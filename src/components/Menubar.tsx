import { Button, Flex } from "@chakra-ui/react";

type Props = {
    colors: string[];
};

export default function Menubar({ colors }: Props): JSX.Element {
    console.log(colors);
    return (
        <Flex spacing={5}>
            <Button color={colors[0]} variant="ghost">Home</Button>
            <Button color={colors[1]} variant="ghost">About</Button>
            <Button color={colors[0]} variant="ghost">Experience</Button>
            <Button color={colors[1]} variant="ghost">Projects</Button>
            <Button color={colors[0]} variant="ghost">Contact</Button>
        </Flex>
    )
}