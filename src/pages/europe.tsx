import { Box, Flex, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";

export default function Europe() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
            w="100%"
            maxW={{ md:"800px", lg: "1000px" }}
        >
            <Header></Header>
            <ContinentCover continentpic="../../continents/worldtrip_venice.jpg" continent="Europa"></ContinentCover>
            <ContinentData
                text={"A Europa é um continente cheio de história, cultura e belezas naturais. Além disso, a proximidade dos países permite explorar novas culturas e lugares em uma viagem!"}
                numberCountries={44}
                numberLanguages={24}
                numberPopulation={"742mi"}
            ></ContinentData>
            <Box w="100%" align="left" p="10px 50px">
                <Text textColor={"gray.600"} fontWeight="bold" fontSize={"4xl"}>
                    Cidades
                </Text>
            </Box>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic="../../cities/rome.jpg" city="Roma" country="Itália" flag="../../flags/italy.png"></Card>
                <Card citypic="../../cities/athens.jpg" city="Atenas" country="Grécia" flag="../../flags/greece.png"></Card>
                <Card citypic="../../cities/london.jpg" city="Londres" country="Inglaterra" flag="../../flags/england.png"></Card>
                <Card citypic="../../cities/paris.jpg" city="Paris" country="Franca" flag="../../flags/france.png"></Card>
            </Flex>
        </Flex>
    )
}