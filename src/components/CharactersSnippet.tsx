'use client'

import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react"
import CharacterCard from "./CharacterCard"
import { Character } from "@/types/character"

export default function CharactersSnippet ({ characters }: { characters: Character[] }) {
  
  return (
    <Flex justifyContent="center" flexDirection="column" alignItems={"center"}>
      <Box></Box>
      <Wrap spacing='30px' align='center' justify='center'>
        {characters.map((character) => (
          <WrapItem key={character.id}>
            <CharacterCard character={character}/>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  )
}