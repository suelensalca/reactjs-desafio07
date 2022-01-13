import { Box, Flex, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";

export default function Oceania() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
            w="100%"
            maxW={{ md:"800px", lg: "1000px" }}
        >
            <Header></Header>
            <ContinentCover continentpic="../../continents/worldtrip_australia.jpg" continent="Oceania"></ContinentCover>
            <ContinentData
                text={"A Oceania é uma região composta por vários grupos de ilhas no oceano Pacífico. E é claro que o continente atrai surfistas, mergulhadores e amantes de praias! A Oceania é o continente perfeito para apreciar as maravilhas da natureza."}
                numberCountries={14}
                numberLanguages={21}
                numberPopulation={"37mi"}
            ></ContinentData>
            <Box w="100%" align="left" p="10px 50px">
                <Text textColor={"gray.600"} fontWeight="bold" fontSize={"4xl"}>
                    Cidades
                </Text>
            </Box>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic="../../cities/apia.jpg" city="Apia" country="Samoa" flag="../../flags/samoa.png"></Card>
                <Card citypic="../../cities/suva.jpg" city="Suva" country="Fiji" flag="../../flags/fiji.png"></Card>
                <Card citypic="../../cities/sydney.jpg" city="Sydney" country="Australia" flag="../../flags/australia.png"></Card>
                <Card citypic="../../cities/wellington.jpg" city="Wellington" country="Nova Zelândia" flag="../../flags/new_zealand.png"></Card>
            </Flex>
        </Flex>
    )
}