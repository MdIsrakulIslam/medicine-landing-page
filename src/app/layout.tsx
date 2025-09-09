import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const roboto = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "LAMARE - Your AI-Powered Digital Companion for Healthcare",
  description:
    "AI-powered healthcare companion supporting your surgery journey with SurgiSmart, CareLoop, and EmotiCare tools.",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
