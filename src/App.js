import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid
} from '@chakra-ui/react';
import '@fontsource/inconsolata'
import theme from './theme'
import { Global, css } from '@emotion/react'
import LandingPage from './routes/LandingPage';

function App() {

  const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
  }`


  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Box bg="#FA7B62">
        <Grid minH="100vh" p={3}>
            <LandingPage />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
