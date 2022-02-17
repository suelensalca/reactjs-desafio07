import { Box, Button as ChakraButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const lngs ={
    pt: { nativeName: 'Português' },
    en: { nativeName: 'English' }
  };

export function Button() {
    const { t, i18n } = useTranslation()

    return (
        <Box p="20px 0px 40px 0px">
        {Object.keys(lngs).map((lng) => (
          <ChakraButton
            m="10px"
            key={lng} 
            size="sm"
            colorScheme="yellow"
            type="submit" 
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </ChakraButton>
        ))}
      </Box>
    )
}