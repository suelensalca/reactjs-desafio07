import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";

export default function America() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
            w="100%"
            maxW={{ md:"800px", lg: "1000px" }}
        >
            <Header></Header>
            <ContinentCover continentpic="../../continents/worldtrip_rio.jpg" continent="América"></ContinentCover>
            <ContinentData
                text={"O continente americano é a maior massa terrrestre do planeta no sentido norte-sul. Isso permite centenas de lugares incríveis para conhecer, com uma riqueza de climas, paisagens e cultura! Das antigas cidades do Peru à agitada Nova York, temos lugares para todos os gostos."}
                numberCountries={35}
                numberLanguages={37}
                numberPopulation={"935mi"}
            ></ContinentData>
            <Box w="100%" align="left" p="10px 50px">
                <Text textColor={"gray.600"} fontWeight="bold" fontSize={"4xl"}>
                    Cidades
                </Text>
            </Box>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic="../../cities/new_york.jpg" city="Nova York" country="EUA" flag="../../flags/usa.png"></Card>
                <Card citypic="../../cities/rio.jpg" city="Rio de Janeiro" country="Brasil" flag="../../flags/brazil.png"></Card>
                <Card citypic="../../cities/lima.jpg" city="Lima" country="Peru" flag="../../flags/peru.png"></Card>
                <Card citypic="../../cities/toronto.jpg" city="Toronto" country="Canada" flag="../../flags/canada.png"></Card>
            </Flex>
        </Flex>
    )
}