import { DevilFruit } from "./devilFruit"

type Status = 'Alive' | 'Unkown' | 'Deceased'
type BloodType = 'F' | 'X' | 'XF' | 'S'

export interface Character {
  // Required Fields
  id: string
  image: string
  name: {
    japanese: string
    romanized: string
    english: string
  }
  status: Status
  debut: {
    chapter: number
    episode: number | null
  }

  // Optional Fields
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
  age?: number 
  ageAtDeath?: number
  height?: number 
  weight?: number
  bounty?: number 
  formerBounties?: number[]
  bloodType?: BloodType
  birthday?: string
  doriki?: number
  favoriteFoods?: string[]
  zombieNumber?: number
  gladiatorNumber?: string
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