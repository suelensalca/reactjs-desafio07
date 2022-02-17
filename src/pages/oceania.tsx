import { Flex } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";
import images from '../assets/images';
import { Cities } from "../components/Cities";
import '../components/i18next';
import { useTranslation } from "react-i18next";

export default function Oceania() {
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
            <ContinentCover continentpic={images.continents.oceania} continent={t('continentOceania')}></ContinentCover>
            <ContinentData
                text={t('oceania.continentDataText')}
                numberCountries={14}
                numberLanguages={21}
                numberPopulation={t('oceania.continentDataPopulation', { total: 37 })}
            ></ContinentData>
            <Cities/>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic={images.cities.apia} city={t('oceania.city1')} country={t('oceania.country1')} flag={images.flags.samoa}></Card>
                <Card citypic={images.cities.suva} city={t('oceania.city2')} country={t('oceania.country2')} flag={images.flags.fiji}></Card>
                <Card citypic={images.cities.sydney} city={t('oceania.city3')} country={t('oceania.country3')} flag={images.flags.australia}></Card>
                <Card citypic={images.cities.wellington} city={t('oceania.city4')} country={t('oceania.country4')} flag={images.flags.newzeland}></Card>
            </Flex>
        </Flex>
    )
}