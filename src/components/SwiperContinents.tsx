import { Box, Image } from "@chakra-ui/react";
import images from '../assets/images';
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function SwiperContinents() {
  const { t, i18n } = useTranslation();

  return (
    <Box p="20px 0px 20px 0px" maxW={{ md:"600px", lg: "1000px"}}>
      <Swiper id="swiper-color" cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
        <SwiperSlide>
          <Link href="/america">
            <Image position={"relative"} filter={"brightness(75%)"} src={images.continents.america}/>
            <text className="center">{t('continentAmerica')}</text>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/asia">
            <Image filter={"brightness(75%)"} src={images.continents.asia}/>
            <text className="center">{t('continentAsia')}</text>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/europe">
            <Image filter={"brightness(75%)"} src={images.continents.europe}/>
            <text className="center">{t('continentEurope')}</text>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="africa">
            <Image filter={"brightness(75%)"} src={images.continents.africa}/>
            <text className="center">{t('continentAfrica')}</text>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="oceania">
            <Image filter={"brightness(75%)"} src={images.continents.oceania}/>
            <text className="center">{t('continentOceania')}</text>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}