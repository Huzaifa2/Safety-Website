"use client";

import * as React from "react";
import { ThemeProvider } from "@/components/layout/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
