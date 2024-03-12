'use client'

import { Flex, Heading, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

export default function DevilFruitSchema () {
  const characterSchema: {
    key: string
    type: 'string' | 'integer' | 'string[ ]' | any
    description: string
  }[] = [
    {
      key: 'id',
      type: 'string',
      description: 'Unique identifier.'
    },
    {
      key: 'image',
      type: 'string',
      description: 'Visual representation accessible via URL.'
    },
    {
      key: 'japaneseName',
      type: 'string',
      description: `Devil Fruit's Japanese name.`
    },
    {
      key: 'englishName',
      type: 'string',
      description: `Devil Fruit's translated English name.`
    },
    {
      key: 'meanings',
      type: 'string[ ]',
      description: 'Meanings or attributes associated with the Devil Fruit.'
    },
    {
      key: 'type',
      type: 'string',
      description: 'Type of Devil Fruit (e.g., Paramecia, Logia).'
    },
  ]

  return (
    <Flex direction="column">
      <Heading as="h2" size="lg" mb={10} mt={10}>Devil Fruit Schema</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Key</Th>
              <Th>Description</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {characterSchema.map(({key, type, description}) => (
              <Tr key={key}>
                <Td>{key}</Td>
                <Td>{description}</Td>
                <Td>{type}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}