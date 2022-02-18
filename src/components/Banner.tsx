import { Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import images from '../assets/images';

export function Banner() {
    const { t, i18n } = useTranslation()

    return (
        <Flex pb={"40px"}>
          <Flex flexWrap={'nowrap'} flexDir={'row-reverse'}>
            <Image alt="banner" src={images.background} minH={["120", "160", "200", "280"]}></Image>
            <Image mt={["2", "4", "8", "12"]} mr={["1", "4", "8", "12"]} maxW={["180", "244", "280", "380"]} position={'absolute'} zIndex={'10'} alt="banner" src={images.airplane} minH={"120"}></Image>
          </Flex>
          <Text 
            maxW={["200", "300", "600"]}
            pt={["4", "7", "9", "14" ]}
            pl={["4", "8", "10", "20" ]}
            zIndex={'30'}
            fontSize={{base: '16px', md: '24px', lg: '32px' }}
            fontWeight={"medium"} color={"#fff"}
            position={'absolute'}
          >
            {t('landpage.banner1')}
          </Text>
          <Text
            maxW={["220", "280", "400", "600" ]}
            pt={["14", "20", "20", "40" ]}
            pl={["2", "8", "10", "20" ]}
            zIndex={'20'}
            fontSize={{base: '0px', sm: '12px', md: '18px', lg: '20px' }}
            fontWeight={"medium"}
            color={"#fff"}
            position={'absolute'}
          >
            {t('landpage.banner2')}
          </Text>
      </Flex>
    )
}