import { Flex } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";
import images from '../assets/images';
import { Cities } from "../components/Cities";
import '../components/i18next';
import { useTranslation } from "react-i18next";

export default function Europe() {
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
            <ContinentCover continentpic={images.continents.europe} continent={t('continentEurope')}></ContinentCover>
            <ContinentData
                text={t('europe.continentDataText')}
                numberCountries={44}
                numberLanguages={24}
                numberPopulation={t('europe.continentDataPopulation', { total: 742 })}
            ></ContinentData>
            <Cities/>
            <Flex w="100%" flexWrap={'wrap'} p="20px 40px">
                <Card citypic={images.cities.rome} city={t('europe.city1')} country={t('europe.country1')} flag={images.flags.italy}></Card>
                <Card citypic={images.cities.athens} city={t('europe.city2')} country={t('europe.country2')} flag={images.flags.greece}></Card>
                <Card citypic={images.cities.london} city={t('europe.city3')} country={t('europe.country3')} flag={images.flags.england}></Card>
                <Card citypic={images.cities.paris} city={t('europe.city4')} country={t('europe.country4')} flag={images.flags.france}></Card>
            </Flex>
        </Flex>
    )
}