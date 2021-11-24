import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#333333",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.050",
        color: "gray.900",
      },
    },
  },
});
