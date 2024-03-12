import { Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

export default function CharacterSchema () {
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
      description: 'Authentic Japanese name.'
    },
    {
      key: 'romanizedName',
      type: 'string',
      description: 'Romanized version of the Japanese name.'
    },
    {
      key: 'englishName',
      type: 'string',
      description: 'Translated English name.'
    },
    {
      key: 'debut',
      type: 'string[ ]',
      description: 'First appearance details.'
    },
    {
      key: 'affiliations',
      type: 'string[ ]',
      description: 'Associated affiliations.'
    },
    {
      key: 'formerAffiliations',
      type: 'string[ ]',
      description: 'Past associated affiliations.'
    },
    {
      key: 'occupations',
      type: 'string[ ]',
      description: 'Roles or occupations.'
    },
    {
      key: 'formerOccupations',
      type: 'string[ ]',
      description: 'Past roles or occupations.'
    },
    {
      key: 'status',
      type: 'string',
      description: 'Current status (e.g., Alive).'
    },
    {
      key: 'age',
      type: 'integer',
      description: 'Current age.'
    },
    {
      key: 'onePieceWikiFandom',
      type: 'string',
      description: `Link to the character's page on the One Piece Wiki Fandom for additional information and details.`
    },
    {
      key: 'birthday',
      type: 'string',
      description: 'Birthdate.',
    },
    {
      key: 'height',
      type: 'integer',
      description: 'Height measurement in centimeters',
    },
    {
      key: 'bloodType',
      type: 'string',
      description: 'Blood type.',
    },
    {
      key: 'bounty',
      type: 'integer',
      description: 'Current bounty.',
    },
    {
      key: 'devilFruit',
      type: 'object',
      description: 'Possessed Devil Fruit details (if applicable).',
    },
    {
      key: 'origin',
      type: 'string',
      description: 'Place of origin.',
    },
    {
      key: 'residence',
      type: 'string',
      description: 'Past and present places of residence.',
    }
  ]

  return (
    <Flex direction="column">
      <Heading as="h2" size="lg" mb={10} mt={10}>Character Schema</Heading>
      <TableContainer maxW={900}>
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
                <Td whiteSpace={"normal"}>{description}</Td>
                <Td>{type}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}