import { Box, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Box>
            <a href="/">
                <Image p="22px 0px" src='../../Logo.png' />
            </a>
        </Box>
    )
}