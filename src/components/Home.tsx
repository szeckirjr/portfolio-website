import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Heading, IconButton, Image, VStack } from "@chakra-ui/react";
import randomColor from "randomcolor";
import { useState } from "react";
import Particles from "react-particles-js";
import { RandomReveal } from "react-random-reveal";
import { CharactersRequired } from "react-random-reveal/lib/types";

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home(): JSX.Element {
    const [ imgSrc, setImgSrc ] = useState(['memojis/memoji', String(getRandomInt(1,6)), '.png'].join(''));
    const [ colors, setColors ] = useState(randomColor({ count: 2 }));

    const handleClick = () => {
        setImgSrc(['memojis/memoji', String(getRandomInt(1,6)), '.png'].join(''));
        setColors(randomColor({ count: 2 }))
    }

	const charSet: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@%$#&*".split('');

    return (
        <>
            <Center h="100vh" bg="#303030" p="20px">
                <VStack spacing={8}>
                    <Image cursor="pointer" borderRadius="full" bgGradient={['linear(to-b,',colors[0],',',colors[1],')'].join('')} boxSize="230px" src={imgSrc} onClick={handleClick} />
                    <Heading color="gray.200" size="4xl">
						Hello, I am Eduardo
                    </Heading>
                    <Heading color={colors[0]}>
						<RandomReveal
							characters="Software Engineering student @ UVic"
							isPlaying
							duration={2}
							speed={2}
							revealDuration={0.9}
							revealEasing="easeOutQuad"
							characterSet={charSet as CharactersRequired}
						/>
                    </Heading>
					<IconButton
						isRound
						aria-label="Continue to next page"
						icon={<ChevronDownIcon />}
						size="lg"
					/>
                </VStack>
            </Center>
            <Particles height="10vh" />
        </>
    );
}