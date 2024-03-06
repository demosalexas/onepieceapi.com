import type { Metadata } from 'next'
import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react'

import Code from '@/components/code'
import Hero from '@/components/hero'

export const metadata: Metadata = {
  title: 'Documentation',
  description: '',
}

export default function Documentation() {
  const code = `
    const name = "matheus"
    console.log(23)
    function showName (name) {
      return name
    }
  `
  if(true) {
    return <Hero />
  }

  return (
    <Flex justifyContent="center">
      <Box p={4} w="800px">
        <Heading as="h1" size="lg" mb={4}>
          Documentation
        </Heading>
        <Text>
          This documentation will help you get familiar with the resources of the Rick and Morty API and show you how to make different queries, so that you can get the most out of it.
        </Text>
        <Code code={code} language='javascript' />
        <Heading as="h3" size="md" mt={6} mb={4}>
          Rest
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
