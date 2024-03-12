import { DevilFruit } from "./devilFruit"

type Status = 'Alive' | 'Unkown' | 'Deceased'
type BloodType = 'F' | 'X' | 'XF' | 'S'

export interface Character {
  id: string
  image: string
  japaneseName: string
  romanizedName: string
  englishName: string
  debut: {
    chapter: number
    episode: number
  }
  origin: string
  residence: string
  formerResidences: string[]
  affiliations: string[]
  formerAffiliations: string[]
  occupations: string[]
  formerOccupations: string[]
  status: Status
  age: number | 'Unknown'
  height: number | 'Unknown'
  bounty: number | 'Unknown'
  formerBounties: number[]
  bloodType: BloodType
  birthday: string
  onePieceWikiFandom: string
  devilFruit?: DevilFruit
}
