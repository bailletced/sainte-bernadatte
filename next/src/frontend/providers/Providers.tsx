"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ApolloWrapper } from "./ApolloWrapper";

export const Providers: TFCC = ({ children }) => (
  <ApolloWrapper>
    <NextUIProvider>{children}</NextUIProvider>
  </ApolloWrapper>
);
