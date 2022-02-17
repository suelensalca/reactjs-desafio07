import { Box, Flex, Image, Divider, Text, Button } from "@chakra-ui/react";
import images from '../assets/images';
import { SwiperContinents } from "../components/SwiperContinents";
import './i18next';
import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

const lngs ={
  pt: { nativeName: 'Português' },
  en: { nativeName: 'English' }
};

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
      <Image p="22px 0px" src={images.logo} />
      <Banner />
      <TravelTypes />
      <Divider maxW="60px" border={"2px"} borderColor="gray.500" bg={'gray.500'}/>
      <Box p="40px 0px 20px 0px" align="center">
        <Text fontSize={{base: '14px', md: '20px', lg: '24px'}} textColor={"gray.600"} fontWeight="medium">{t('landpage.text1')}<br/>{t('landpage.text2')}<br/>{t('landpage.text3')}</Text>
      </Box>
      <Box p="20px 0px 20px 0px" maxW={{ md:"600px", lg: "1000px"}}>
        <SwiperContinents />
      </Box>
      <Box p="20px 0px 40px 0px">
        {Object.keys(lngs).map((lng) => (
          <Button 
            m="10px"
            key={lng} 
            size="sm"
            colorScheme="yellow"
            type="submit" 
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </Box>
    </Flex>
  )
}