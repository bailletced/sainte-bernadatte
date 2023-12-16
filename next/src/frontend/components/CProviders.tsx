"use client";

import { NextUIProvider } from "@nextui-org/react";

export const Providers: TFCC = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);
