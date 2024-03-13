import { Character } from '@/types/character'

export default function getCharactersByFilter(characters: Character[], key: keyof Character, value: string | number) {
  const filters: string[] = ['englishName', 'japaneseName']

  const foundCharacters = characters.filter((character) => {
    if (key === 'bounty') {
      return Number(character['bounty']) >= Number(value)
    }

    if(filters.includes(key)) {
      return character[key]?.toString().includes(String(value))
    }

    return character[key] ===  value 

  })

  if(!foundCharacters) {
    return []
  }

  return foundCharacters
}

const mainString = "sds";
const substring = "dsd";

const isSubstringPresent = mainString.includes(substring);