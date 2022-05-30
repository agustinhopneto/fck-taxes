import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import { theme } from '../styles/theme';

import '../styles/scrollbar.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>fck.taxes</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
