import { Flex } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ContinentCover } from "../components/ContinentCover";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";
import images from '../assets/images';
import { Cities } from "../components/Cities";
import '../components/i18next';
import { useTranslation } from "react-i18next";

export default function Asia() {
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
            <ContinentCover continentpic={images.continents.asia} continent={t('continentAsia')}></ContinentCover>
            <ContinentData
                text={t('asia.continentDataText')}
                numberCountries={50}
                numberLanguages={72}
                numberPopulation={t('asia.continentDataPopulation', { total: 4.5 })}
            ></ContinentData>
            <Cities/>
            <Flex w="100%" flexWrap={'wrap'} p="20px 60px">
                <Card citypic={images.cities.dubai} city={t('asia.city1')} country={t('asia.country1')} flag={images.flags.uae}></Card>
                <Card citypic={images.cities.istanbul} city={t('asia.city2')} country={t('asia.country2')} flag={images.flags.turkey}></Card>
                <Card citypic={images.cities.shanghai} city={t('asia.city3')} country={t('asia.country3')} flag={images.flags.china}></Card>
                <Card citypic={images.cities.tokyo} city={t('asia.city4')} country={t('asia.country4')} flag={images.flags.japan}></Card>
            </Flex>
        </Flex>
    )
}