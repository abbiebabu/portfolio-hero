import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Abhay Maskey | Portfolio",
  description: "Personal portfolio website of Abhay Maskey",
  
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Phudu:wght@800&family=Pixelify+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
