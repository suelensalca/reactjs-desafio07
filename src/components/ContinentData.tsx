import { Box, Text } from "@chakra-ui/react";

interface ContinentDataProps {
    text: string;
    numberCountries: number;
    numberLanguages: number;
    numberPopulation: string;
}

export function ContinentData({ text, numberCountries, numberLanguages, numberPopulation }: ContinentDataProps) {
    return (
        <Box w="100%" display={'flex'} flexWrap={"wrap"} p="40px 0px">
            <Box m="0px 50px" maxW={{ lg:"400px" }}>
                <Text textColor={"gray.600"} fontWeight="medium">
                    {text}
                </Text>
            </Box>
            <Box p='10px' maxW='180px' >
                <Text fontSize={'5xl'} color={ "#FFBA08"} fontWeight={'medium'}>{numberCountries}</Text>
                <Text fontSize={'2xl'} color={'gray.600'} fontWeight={'medium'}>Países</Text>
            </Box>
            <Box p='10px' maxW='180px' >
                <Text fontSize={'5xl'} color={ "#FFBA08"} fontWeight={'medium'}>{numberLanguages}</Text>
                <Text fontSize={'2xl'} color={'gray.600'} fontWeight={'medium'}>Línguas</Text>
            </Box>
            <Box p='10px' maxW='180px' >
                <Text fontSize={'5xl'} color={ "#FFBA08"} fontWeight={'medium'}>{numberPopulation}</Text>
                <Text fontSize={'2xl'} color={'gray.600'} fontWeight={'medium'}>Habitantes</Text>
            </Box>
        </Box>
        
    )
}