import { Box, Flex, Divider, Text } from "@chakra-ui/react";
import { SwiperContinents } from "../components/SwiperContinents";
import '../components/i18next';
import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      w="100%"
      maxW={{ md:"800px", lg: "1200px" }}
    >
      <Header />
      <Banner />
      <TravelTypes />
      <Divider maxW="60px" border={"2px"} borderColor="gray.500" bg={'gray.500'}/>
      <Box p="40px 20px 20px 20px" align="center">
        <Text fontSize={{base: '14px', md: '20px', lg: '24px'}} textColor={"gray.600"} fontWeight="medium">{t('landpage.text1')}<br/>{t('landpage.text2')}<br/>{t('landpage.text3')}</Text>
      </Box>
      <SwiperContinents />
      <Button />
    </Flex>
  )
}