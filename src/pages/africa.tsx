import { Flex } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";
import { Cities } from "../components/Cities";
import images from '../assets/images';
import '../components/i18next';
import { useTranslation } from "react-i18next";

export default function Africa() {
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
            <ContinentCover continentpic={images.continents.africa} continent={t('continentAfrica')}></ContinentCover>
            <ContinentData
                text={t('africa.continentDataText')}
                numberCountries={54}
                numberLanguages={31}
                numberPopulation={t('africa.continentDataPopulation', { total: 1.2 })}
            ></ContinentData>
            <Cities />
            <Flex w="100%" flexWrap={'wrap'} p="20px 40px">
                <Card citypic={images.cities.cairo} city={t('africa.city1')} country={t('africa.country1')} flag={images.flags.egypt}></Card>
                <Card citypic={images.cities.capetown} city={t('africa.city2')} country={t('africa.country2')} flag={images.flags.southafrica}></Card>
                <Card citypic={images.cities.lagos} city={t('africa.city3')} country={t('africa.country3')} flag={images.flags.nigeria}></Card>
                <Card citypic={images.cities.casablanca} city={t('africa.city4')} country={t('africa.country4')} flag={images.flags.morocco}></Card>
            </Flex>
        </Flex>
    )
}