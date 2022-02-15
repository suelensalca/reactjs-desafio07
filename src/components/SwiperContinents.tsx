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
          <Image filter={"brightness(75%)"} src={images.continents.america}/>
          <a href="/america" className="center">{t('continentAmerica')}</a>
        </SwiperSlide>
        <SwiperSlide>
          <Image filter={"brightness(75%)"} src={images.continents.asia}/>
          <a href="/asia" className="center">{t('continentAsia')}</a>
        </SwiperSlide>
        <SwiperSlide>
          <Image filter={"brightness(75%)"} src={images.continents.europe}/>
          <a href="/europe" className="center">{t('continentEurope')}</a>
        </SwiperSlide>
        <SwiperSlide>
          <Image filter={"brightness(75%)"} src={images.continents.africa}/>
          <a href="africa" className="center">{t('continentAfrica')}</a>
        </SwiperSlide>
        <SwiperSlide>
          <Image filter={"brightness(75%)"} src={images.continents.oceania}/>
          <a href="oceania" className="center">{t('continentOceania')}</a>
        </SwiperSlide>
      </Swiper>
  )
}