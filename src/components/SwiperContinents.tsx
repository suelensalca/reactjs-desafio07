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
            <a>
              <Image position={"relative"} filter={"brightness(75%)"} src={images.continents.america} alt={t('continentAmerica')}/>
              <text className="center">{t('continentAmerica')}</text>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/asia">
            <a>
              <Image filter={"brightness(75%)"} src={images.continents.asia} alt={t('continentAsia')}/>
              <text className="center">{t('continentAsia')}</text>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/europe">
            <a>
              <Image filter={"brightness(75%)"} src={images.continents.europe} alt={t('continentEurope')}/>
              <text className="center">{t('continentEurope')}</text>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="africa">
            <a>
              <Image filter={"brightness(75%)"} src={images.continents.africa} alt={t('continentAfrica')}/>
              <text className="center">{t('continentAfrica')}</text>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="oceania">
            <a>
              <Image filter={"brightness(75%)"} src={images.continents.oceania} alt={t('continentOceania')}/>
              <text className="center">{t('continentOceania')}</text>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}