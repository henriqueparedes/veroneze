import type { AppProps } from "next/app";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
