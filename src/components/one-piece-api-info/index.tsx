import Image from "next/image";
import NextLink from 'next/link'
import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react'

export default function OnePieceApiInfo () {
  return (
    <Flex justifyContent="center">
      <Box p={4} w="800px">
        <Heading as="h1" size="lg" mb={4}>
          One Piece API Overview
        </Heading>
        <Text>
          The One Piece API is a comprehensive REST centered around the popular manga and anime series One Piece.
          Gain access to a vast collection of characters and images, filled with canonical information derived from the One Piece series.
        </Text>
        <Text mt={4}>
          Explore the documentation to get started: <Link href="/documentation">Documentation</Link>
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Motivation
        </Heading>
        <Text>
            One Piece holds a special place in my heart, making it the perfect inspiration for this project.
            My fascination with contributing to an open-source project and my deep love for One Piece are the driving forces behind the creation of this API.
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Technical Details
        </Heading>
        <Text>
          The entire project is hosted on Vercel.
          We leverage Node.js and Next.js to serve the API.
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Contribution
        </Heading>
        <Text>
          You can support it in maintaining the project&apos;s vitality and also contribute on GitHub: <Link href="https://github.com/demosalexas/one-piece-api">One Piece API</Link>
        </Text>

        <Heading as="h3" size="md" mt={6} mb={4}>
          Copyright Information
        </Heading>
        <Text>
          One Piece is created by Eiichiro Oda. The data and images are used without claim of ownership and belong to their respective owners.
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
