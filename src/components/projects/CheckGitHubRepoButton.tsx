import { Button } from "@chakra-ui/react"
import { AiFillGithub } from "react-icons/ai"
import { BsArrowUpRight } from "react-icons/bs"

type Props = {
    repo_url?: string;
}

export default function CheckGitHubRepoButton({repo_url}: Props){
    return repo_url ? <Button
        color="white"
        as="a"
        href={repo_url}
        target="_blank"
        leftIcon={<AiFillGithub />}
        rightIcon={<BsArrowUpRight />}
        bg="#333"
        _hover={{
            bg: "#606060"
        }}
    >
        Check GitHub Repository
    </Button> :
    null
}