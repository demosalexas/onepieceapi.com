'use client'

import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { Character } from "@/types/character";


export default function CharacterCard ({ character }: { character: Character }) {
  const { name : { japanese, english }, image, status } = character

  return (
    <Center py={6}>
      <Stack
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('gray.100', 'gray.900')}
        padding={4}>
        <Flex flex={1}>
          <Image
            objectFit="fill"
            boxSize="100%"
            src={image}
            alt={`${english} image`}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {english}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {japanese}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or
            <Text color={'blue.400'}>#tag</Text>
            {status}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}
