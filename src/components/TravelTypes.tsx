import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import images from "../assets/images";

export function TravelTypes() {
    const { t, i18n } = useTranslation();

    return (
        <Flex w="100%" flexWrap={"wrap"} justifyContent={"space-around"} p="40px 10px" maxW={["300", "600", "1000"]} textAlign={"center"}>
            <Box flexWrap={"wrap"} maxW={["82px", "100px", "180px"]} pl={"3"} pr={"3"}>
                <Image src={images.traveltypes.cocktail} />
                <Text fontSize={{base: '13px', md: '18px', lg: '20px'}} color={'gray.600'} fontWeight={'medium'}>{t('landpage.travelType1')}</Text>
            </Box>
            <Box flexWrap={"wrap"} maxW={["80px", "100px", "180px"]} pl={"3"} pr={"3"}>
                <Image src={images.traveltypes.surf} />
                <Text fontSize={{base: '13px', md: '18px', lg: '20px'}} color={'gray.600'} fontWeight={'medium'}>{t('landpage.travelType2')}</Text>
            </Box>
            <Box flexWrap={"wrap"} maxW={["80px", "100px", "180px"]} pl={"3"} pr={"3"}>
                <Image src={images.traveltypes.building} />
                <Text fontSize={{base: '13px', md: '18px', lg: '20px'}} color={'gray.600'} fontWeight={'medium'}>{t('landpage.travelType3')}</Text>
            </Box>
            <Box flexWrap={"wrap"} maxW={["80px", "100px", "180px"]} pl={"3"} pr={"3"}>
                <Image src={images.traveltypes.museum} />
                <Text fontSize={{base: '13px', md: '18px', lg: '20px'}} color={'gray.600'} fontWeight={'medium'}>{t('landpage.travelType4')}</Text>
            </Box>
            <Box flexWrap={"wrap"} maxW={["80px", "100px", "180px"]} pl={"3"} pr={"3"}>
                <Image src={images.traveltypes.earth} />
                <Text fontSize={{base: '13px', md: '18px', lg: '20px'}} color={'gray.600'} fontWeight={'medium'}>{t('landpage.travelType5')}</Text>
            </Box>           
        </Flex>
    )
}