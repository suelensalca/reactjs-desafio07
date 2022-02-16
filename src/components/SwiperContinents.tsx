import { Image } from "@chakra-ui/react";
import images from '../assets/images';
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
      <Swiper id="swiper-color" cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
        <SwiperSlide>
          <a href="/america">
            <Image position={"relative"} filter={"brightness(75%)"} src={images.continents.america}/>
            <text className="center">{t('continentAmerica')}</text>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/asia">
            <Image filter={"brightness(75%)"} src={images.continents.asia}/>
            <text className="center">{t('continentAsia')}</text>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/europe">
            <Image filter={"brightness(75%)"} src={images.continents.europe}/>
            <text className="center">{t('continentEurope')}</text>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="africa">
            <Image filter={"brightness(75%)"} src={images.continents.africa}/>
            <text className="center">{t('continentAfrica')}</text>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="oceania">
            <Image filter={"brightness(75%)"} src={images.continents.oceania}/>
            <text className="center">{t('continentOceania')}</text>
          </a>
        </SwiperSlide>
      </Swiper>
  )
}