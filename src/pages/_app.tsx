import type { AppProps } from "next/app";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "../Components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
