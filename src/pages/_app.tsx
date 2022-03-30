import type { AppProps } from "next/app";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "../Components/Header";
import Simple from "../Components/Header2";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <Header /> */}
      <Simple />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
