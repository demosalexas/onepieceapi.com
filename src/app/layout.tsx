import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Flex } from '@chakra-ui/react'

import { Providers } from './providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'One Piece API',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <Flex direction="column" flex="1" justifyContent="space-between" h="100vh">
            <Header />
            {children}
            <Footer />
          </Flex>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
