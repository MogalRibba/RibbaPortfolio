import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientThemeProvider } from "@/components/client-theme-provider"
import { MotionConfig } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ribba Mogal - Portfolio",
  description: "Frontend Developer, Android Developer, Unity Game Developer",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MotionConfig reducedMotion="never">
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </MotionConfig>
      </body>
    </html>
  )
}
