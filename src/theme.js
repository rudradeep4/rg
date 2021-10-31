import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Inconsolata",
    body: "Inconsolata",
  },
  components: {
    Drawer: {
      baseStyle: {
        placement: "left",
        size: "md"
      },
      sizes: {
        xl: {
          size: "lg",
        },
      },
      variants: {
        "match-bg": {
          bg: "black",
        },
      }
    }
  }
})

export default theme