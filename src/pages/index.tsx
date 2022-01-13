import { Box, Flex, Image, Divider, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      w="100%"
      maxW={{ md:"800px", lg: "1000px" }}
    >
      <Box>
          <Image p="22px 0px" src='../../Logo.png' />
      </Box>
      <Box>
        <Image
          src='../../Banner.png'
        />
      </Box>
      <Box p="40px 10px" maxW={{ md:"600px", lg: "800px"}}>
        <Image 
          src='../../Travel_types.png'
        />
      </Box>
      <Divider maxW="60px" border={"2px"} borderColor="gray.500" />
      <Box p="40px 0px 20px 0px" align="center">
        <Text textColor={"gray.600"} fontWeight="medium">Que tal conhecer as melhores cidades para visitar em cada continente?</Text>
        <Text textColor={"gray.600"} fontWeight="medium" >Vamos nessa?</Text>
        <Text textColor={"gray.600"} fontWeight="medium" >Então escolha seu continente!</Text>
      </Box>
      <Box p="20px 0px 40px 0px" maxW={{ md:"600px", lg: "800px"}}>
        <Swiper id="swiper-color" cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
          <SwiperSlide>
            <Image filter={"brightness(75%)"} src='../../continents/worldtrip_rio.jpg'/>
            <a href="/america" className="center">América</a>
          </SwiperSlide>
          <SwiperSlide>
            <Image filter={"brightness(75%)"} src='../../continents/worldtrip_japan.jpg'/>
            <a href="/asia" className="center">Ásia</a>
          </SwiperSlide>
          <SwiperSlide>
            <Image filter={"brightness(75%)"} src='../../continents/worldtrip_venice.jpg'/>
            <a href="/europe" className="center">Europa</a>
          </SwiperSlide>
          <SwiperSlide>
            <Image filter={"brightness(75%)"} src='../../continents/worldtrip_egypt.jpg'/>
            <a href="africa" className="center">África</a>
          </SwiperSlide>
          <SwiperSlide>
            <Image filter={"brightness(75%)"} src='../../continents/worldtrip_australia.jpg'/>
            <a href="oceania" className="center">Oceania</a>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  )
}