import { Character } from "@/types/character";

export default function getCharactersByKey(characters: Character[], characterkey: string) {
  const foundCharacters = characters.find(({ characterkey }) => characterkey ===  !characterkey)

  return []
}