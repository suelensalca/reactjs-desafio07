import { Box, Flex, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";

export default function Africa() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
            w="100%"
            maxW={{ md:"800px", lg: "1000px" }}
        >
            <Header></Header>
            <ContinentCover continentpic="../../continents/worldtrip_egypt.jpg" continent="África"></ContinentCover>
            <ContinentData
                text={"O continente africano é conhecido por sua diversidade natural e paisagens, e é rico em história e cultura. De safaris e excursões à resorts e grandes cidades, a África possui turismo para todos os gostos!"}
                numberCountries={54}
                numberLanguages={31}
                numberPopulation={"1.2bi"}
            ></ContinentData>
            <Box w="100%" align="left" p="10px 50px">
                <Text textColor={"gray.600"} fontWeight="bold" fontSize={"4xl"}>
                    Cidades
                </Text>
            </Box>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic="../../cities/cairo.jpg" city="Cairo" country="Egito" flag="../../flags/egypt.png"></Card>
                <Card citypic="../../cities/cape_town.jpg" city="Cidade do Cabo" country="África do Sul" flag="../../flags/south_africa.png"></Card>
                <Card citypic="../../cities/lagos.jpg" city="Lagos" country="Nigéria" flag="../../flags/nigeria.png"></Card>
                <Card citypic="../../cities/casablanca.jpg" city="Casablanca" country="Marrocos" flag="../../flags/morocco.png"></Card>
            </Flex>
        </Flex>
    )
}