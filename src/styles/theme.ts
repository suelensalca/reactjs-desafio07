import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    color: {
        gray: {
            "50": "#F5F8FA",
            "600": "#47585B",
        },
        yellow: {
            "200": "#FFBA08",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: '#F5F8FA',
            }
        }
    }
})