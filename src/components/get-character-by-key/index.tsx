'use client'

import { Flex, Heading, Text, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import Code from "../code"

export default function GetCharacterByKey () {
  return (
    <Flex direction="column">
    <Heading as="h2" size="lg" mb={5} mt={10}>Get Character By Key</Heading>
    <Text mb={5}>To retrieve the list of characters, simply access the URL{' '}
      <Link as={NextLink} href="https://onepieceapi.com/api/characters" target="_blanket">
        https://onepieceapi.com/api/characters
      </Link>
      .
    </Text>
    <Code code={"code"} language="json" />
  </Flex>
  )
}