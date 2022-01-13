import { Flex, Image, Text } from "@chakra-ui/react";

interface ContinentCoverProps {
    continentpic: string;
    continent: string;
}

export function ContinentCover({ continentpic, continent }: ContinentCoverProps) {
    return (
        <Flex align="end" justify="start" w={"100%"}>
            <Image src={continentpic} alt={continent} filter={'brightness(75%)'} w={'100%'} maxH={{ lg:'500px'}}></Image>
            <Text zIndex={'20'} p='0 50px' fontSize={"38px"} fontWeight={"bold"} color={"#fff"} position={'absolute'}>{continent}</Text>
        </Flex>
    )
}