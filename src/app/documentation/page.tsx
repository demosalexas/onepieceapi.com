'use client'

import type { Metadata } from 'next'
import { Box, Flex } from '@chakra-ui/react'

import CharacterSchema from '@/components/character-schema'
import DevilFruitSchema from '@/components/devil-fruit-schema'
import GetAllCharacters from '@/components/get-all-characters'
import GetCharacterByKey from '@/components/get-character-by-key'

// export const metadata: Metadata = {
//   title: 'Documentation',
//   description: '',
// }

export default function Documentation() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems={"center"}>
      <Box p={4} maxW="900px">
        <CharacterSchema />
        <DevilFruitSchema />
        <GetAllCharacters />
        <GetCharacterByKey />
      </Box>
    </Flex>
  )
}
