'use client'

import { Flex, Heading, Text, Link } from "@chakra-ui/react"
import Code from "../code"
import NextLink from 'next/link'

export default function GetAllCharacters () {
  const code = `
    {
      "info": {
        "characters": 1393,
        "pages": 70,
        "currentPage": 1,
        "nextPage": "https://onepieceapi.com/api/characters?page=2",
        "previousPage": null,
      },
      "data": [
        {
          "id": "c-1",
          "image": "https://www.onepieceapi.com/api/images/c-1.jpeg"
        }
      ]
    }
  `
  return (
    <Flex direction="column">
      <Heading as="h2" size="lg" mb={5} mt={10}>Get All Characters</Heading>
      <Text mb={5}>To retrieve the list of characters, simply access the URL{' '}
        <Link as={NextLink} href="https://onepieceapi.com/api/characters" target="_blanket">
          https://onepieceapi.com/api/characters
        </Link>
        .
      </Text>
      <Code code={code} language="json" />
    </Flex>
  )
}