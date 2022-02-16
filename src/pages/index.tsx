import { Box, Flex, Image, Divider, Text, Button } from "@chakra-ui/react";
import images from '../assets/images';
import { SwiperContinents } from "../components/SwiperContinents";
import './i18next';
import { useTranslation } from "react-i18next";

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
      <Flex>
          <Image src={images.banner}></Image>
          <Text zIndex={'20'} p='0 50px' fontSize={"38px"} fontWeight={"bold"} color={"#fff"} position={'absolute'}>Continent</Text>
      </Flex>
      <Box p="40px 10px" maxW={{ md:"600px", lg: "1000px"}}>
        <Image 
          src={images.traveltypes}
        />
      </Box>
      <Divider maxW="60px" border={"2px"} borderColor="gray.500" />
      <Box p="40px 0px 20px 0px" align="center">
        <Text fontSize={"24"} textColor={"gray.600"} fontWeight="medium">{t('landpage.part1')}<br/>{t('landpage.part2')}<br/>{t('landpage.part3')}</Text>
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