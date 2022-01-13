import { Box, Flex, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";

export default function Asia() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
            w="100%"
            maxW={{ md:"800px", lg: "1000px" }}
        >
            <Header></Header>
            <ContinentCover continentpic="../../continents/worldtrip_japan.jpg" continent="Ásia"></ContinentCover>
            <ContinentData
                text={"A Ásia é o maior dos continentes, tanto em área como em população. Na Ásia você encontra algumas das culturas mais antigas do mundo, projetos arquitetônicos incríveis e lindas paisagens naturais. Cada região é mais fascinante que a outra!"}
                numberCountries={50}
                numberLanguages={72}
                numberPopulation={"4.5bi"}
            ></ContinentData>
            <Box w="100%" align="left" p="10px 50px">
                <Text textColor={"gray.600"} fontWeight="bold" fontSize={"4xl"}>
                    Cidades
                </Text>
            </Box>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic="../../cities/dubai.jpg" city="Dubai" country="UAE" flag="../../flags/uae.png"></Card>
                <Card citypic="../../cities/istanbul.jpg" city="Istanbul" country="Turquia" flag="../../flags/turkey.png"></Card>
                <Card citypic="../../cities/shanghai.jpg" city="Shanghai" country="China" flag="../../flags/china.png"></Card>
                <Card citypic="../../cities/tokyo.jpg" city="Tóquio" country="Japao" flag="../../flags/japan.png"></Card>
            </Flex>
        </Flex>
    )
}