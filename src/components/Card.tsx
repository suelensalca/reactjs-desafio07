import { Box, Image, Spacer } from "@chakra-ui/react";

interface CardProps {
    citypic: string;
    city: string;
    country: string;
    flag: string;
}

export function Card({ citypic, city, country, flag }: CardProps) {
    return (
        <Box maxW={{ md:"280px", lg: "400px" }} borderWidth='1px' borderRadius='lg' overflow='hidden' m="20px">
            <Image src={citypic} alt={city} />
            <Box display={"flex"} p='6'>
                <Box w="200px">
                    <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    >
                    {city}
                    </Box>
                    <Box>
                    {country}
                    </Box>
                </Box>
                <Spacer />
                <Box>
                    <Image width={"60px"} src={flag} />
                </Box>
            </Box>
        </Box>
    )
}