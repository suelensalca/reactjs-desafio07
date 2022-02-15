import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function Cities() {
    const { t, i18n } = useTranslation()

    return (
        <Box w="100%" align="left" p="10px 50px">
            <Text textColor={"gray.600"} fontWeight="bold" fontSize={"4xl"}>
                {t('cities')}
            </Text>
        </Box>
    )
}