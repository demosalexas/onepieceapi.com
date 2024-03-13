import { DevilFruit } from "./devilFruit"

type Status = 'Alive' | 'Unkown' | 'Deceased'
type BloodType = 'F' | 'X' | 'XF' | 'S'

export interface Character {
  id: string
  image: string
  japaneseName: string
  romanizedName: string
  englishName: string
  name?: {
    japanese: string
    romanized: string
    english: string
  }
  debut: {
    chapter: number
    episode: number
    sbs?: number
  }
  birthName?: {
    japanese: string
    romanized: string
    english: string
  }
  origin?: string
  residence?: string
  formerResidences?: string[]
  affiliations?: string[]
  formerAffiliations?: string[]
  occupations?: string[]
  formerOccupations?: string[]
  status: Status
  age?: number | 'Unknown'
  ageAtDeath?: number
  height?: number | 'Unknown'
  weight?: number
  bounty?: number | 'Unknown'
  formerBounties?: number[]
  bloodType?: BloodType
  birthday?: string
  doriki?: number
  zombieNumber?: number
  onePieceWikiFandom: string
  devilFruit?: DevilFruit
}

// {
//   "id": "c-594",
//   "image": "https//www.onepieceapi.com/api/images/c-594",
//   "japaneseName": "ゾンビ",
//   "romanizedName": "Zonbi",
//   "englishName": "Zombie",
//   "firstAppearance": "Chapter 444; Episode 339",
//   "features": "Variable; common feature is stitches",
//   "homeland": "Thriller Bark"
// },

// {
//   "id": "c-588",
//   "image": "https//www.onepieceapi.com/api/images/c-588",
//   "japaneseName": "超カルガモ部隊",
//   "romanizedName": "Chō Karugamo Butai",
//   "englishName": "Supersonic Duck SquadronSuper Spot-Billed Duck Troops (OPCG)",
//   "firstAppearance": "Chapter 180; Episode 111[1]",
//   "affiliation": "Arabasta",
//   "leader(s)": "Karoo"
// },