import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface ContinentDataProps {
    text: string;
    numberCountries: number;
    numberLanguages: number;
    numberPopulation: string;
}

export function ContinentData({ text, numberCountries, numberLanguages, numberPopulation }: ContinentDataProps) {
    const { t, i18n } = useTranslation();

    return (
        <Flex w="100%" flexWrap={"wrap"} p="40px 20px" justifyContent={"space-around"}>
            <Box m="0px 50px" maxW={{ lg:"400px" }}>
                <Text textColor={"gray.600"} fontWeight="medium">
                    {text}
                </Text>
            </Box>
            <Box p='5px' maxW='180px' >
                <Text fontSize={{base: '44px', sm: '48px'}} color={ "#FFBA08"} fontWeight={'medium'}>{numberCountries}</Text>
                <Text fontSize={{base: '18px', sm: '24px'}} color={'gray.600'} fontWeight={'medium'}>{t('continentDataCountries')}</Text>
            </Box>
            <Box p='5px' maxW='180px' >
                <Text fontSize={{base: '44px', sm: '48px'}} color={ "#FFBA08"} fontWeight={'medium'}>{numberLanguages}</Text>
                <Text fontSize={{base: '18px', sm: '24px'}} color={'gray.600'} fontWeight={'medium'}>{t('continentDataLangs')}</Text>
            </Box>
            <Box p='5px' maxW='180px' >
                <Text fontSize={{base: '44px', sm: '48px'}} color={ "#FFBA08"} fontWeight={'medium'}>{numberPopulation}</Text>
                <Text fontSize={{base: '18px', sm: '24px'}} color={'gray.600'} fontWeight={'medium'}>{t('continentDataPopulation')}</Text>
            </Box>
        </Flex>
        
    )
}