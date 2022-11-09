import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "../src/components/ButtonStyles";

export const theme = extendTheme({
    colors: {
        primary: "#223263",
        secondary: "#5b9ccd",
        gray: "#EAEAEC"
    },
    components: {
        Button
    },
    size: {
        xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
          },
    }
})