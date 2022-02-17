import { Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import images from '../assets/images';

export function Banner() {
    const { t, i18n } = useTranslation()

    return (
        <Flex>
          <Image src={images.banner}></Image>
          <Text 
            maxW={["180", "300", "600"]}
            pt={["2", "7", "9", "14" ]}
            pl={["2", "8", "10", "20" ]}
            zIndex={'30'}
            fontSize={{base: '14px', md: '24px', lg: '32px' }}
            fontWeight={"medium"} color={"#fff"}
            position={'absolute'}
          >
            {t('landpage.banner1')}
          </Text>
          <Text
            maxW={["220", "400", "620" ]}
            pt={["14", "20", "20", "40" ]}
            pl={["2", "8", "10", "20" ]}
            zIndex={'20'}
            fontSize={{base: '11px', md: '18px', lg: '20px' }}
            fontWeight={"medium"}
            color={"#fff"}
            position={'absolute'}
          >
            {t('landpage.banner2')}
          </Text>
      </Flex>
    )
}