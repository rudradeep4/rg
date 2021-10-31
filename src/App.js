import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  useMediaQuery
} from '@chakra-ui/react';
import '@fontsource/inconsolata'
import theme from './theme'
import { Global, css } from '@emotion/react'
import LandingPage from './routes/LandingPage';
import LandingPageMobile from './routes/LandingPageMobile';


function App() {

  const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
  }`

  const [isLargeScreen] = useMediaQuery("(min-width: 768px)")

  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Box bgImage="bg.jpg">
        <Grid minH="100vh" p={3}>
            {isLargeScreen ? <LandingPage /> : <LandingPageMobile />} 
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
