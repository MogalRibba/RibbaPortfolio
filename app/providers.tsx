"use client";

import { MotionConfig } from "framer-motion";
import { ClientThemeProvider } from "@/components/client-theme-provider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientThemeProvider>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ClientThemeProvider>
  );
}
