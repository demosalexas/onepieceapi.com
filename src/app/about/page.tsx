import type { Metadata } from 'next'
import NextLink from 'next/link'
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react'

import Hero from "@/components/hero"
import { IN_DEV } from "@/consts/in-dev"

export const metadata: Metadata = {
  title: 'About',
  description: '',
}

export default function About() {
  if(IN_DEV) return <Hero />
  
  return (
    <Flex justifyContent="center">
      <Box p={4} w="800px">
        <Heading as="h1" size="lg" mb={4}>
          One Piece API
        </Heading>
        <Text>
          One Piece API is a comprehensive REST centered around the popular manga and anime series One Piece.
          Gain access to a vast collection of characters and images, filled with canonical information derived from the One Piece series.
        </Text>
        <Text mt={2}>
          Explore the documentation to get started: <Link fontWeight={900} as={NextLink} href="/documentation">Documentation</Link>
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Technical Details
        </Heading>
        <Text>
          The complete project is hosted on the Vercel platform. Node.js and Next.js are employed to facilitate the serving of the API.
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Contribution
        </Heading>
        <Text>
          You can support it in maintaining the project&apos;s vitality and also contribute on GitHub: <Link fontWeight={900} href="https://github.com/demosalexas/one-piece-api">One Piece API</Link>
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Copyright Information
        </Heading>
        <Text>
        This API is specifically developed for non-commercial purposes and is intended solely for educational and informational use. It centers around the content inspired by &quot;One Piece&quot;, a creation of Eiichiro Oda. The utilization of data and images within this API is performed without any assertion of ownership and strictly adheres to acknowledging and respecting the rights of their original creators and owners.
        </Text>
        <Text mt={2}>
          It is important to note that all rights to the original content, including characters, storylines, and visuals, belong solely to their respective creators and owners. This API is a tribute to the rich universe of &quot;One Piece&quot;, aiming to provide users with a comprehensive and engaging experience while being fully compliant with copyright regulations.
        </Text>
        <Text mt={2}>
          By accessing and utilizing this API, users acknowledge that it is not intended for any commercial endeavors, and its usage is limited to non-profit, educational, and informational contexts. The API developers emphasize the importance of respecting intellectual property rights and encourage users to explore the official sources and platforms supporting the &quot;One Piece&quot; series.
        </Text>
        <Text mt={2}>
          This API uses material from the{' '} 
          <Link fontWeight={900} href="https://onepiece.fandom.com/wiki/One_Piece_Wiki" target="_blank">One Piece wiki</Link> 
          {' '}at{' '}
          <Link fontWeight={900} href="https://www.fandom.com/">Fandom</Link> 
          {' '}and is licensed under the{' '}
          <Link fontWeight={900} href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons Attribution-Share Alike License</Link>.
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Licensing
        </Heading>
        <Text>
          This API is open source and utilizes a MIT license.
        </Text>
      </Box>
    </Flex>
  )
}
