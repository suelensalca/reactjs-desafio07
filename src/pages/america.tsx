import { Flex } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";
import images from '../assets/images';
import { Cities } from "../components/Cities";
import './i18next';
import { useTranslation } from "react-i18next";

export default function America() {
    const { t, i18n } = useTranslation();

    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
            w="100%"
            maxW={{ md:"800px", lg: "1000px" }}
        >
            <Header/>
            <ContinentCover continentpic={images.continents.america} continent={t('continentAmerica')}></ContinentCover>
            <ContinentData
                text={t('america.continentDataText')}
                numberCountries={35}
                numberLanguages={37}
                numberPopulation={t('america.continentDataPopulation')}
            ></ContinentData>
            <Cities/>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic={images.cities.newyork} city={t('america.city1')} country={t('america.country1')} flag={images.flags.usa}></Card>
                <Card citypic={images.cities.rio} city={t('america.city2')} country={t('america.country2')} flag={images.flags.brazil}></Card>
                <Card citypic={images.cities.lima} city={t('america.city3')} country={t('america.country3')} flag={images.flags.peru}></Card>
                <Card citypic={images.cities.toronto} city={t('america.city4')} country={t('america.country4')} flag={images.flags.canada}></Card>
            </Flex>
        </Flex>
    )
}