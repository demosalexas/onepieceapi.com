type Status = 'Alive' | 'Unkown'

export interface Character {
  id: string
  image: string
  japaneseName: string
  romanizedName: string
  englishName: string
  debut: string[]
  affiliations: string[]
  formerAffiliations: string[]
  occupations: string[]
  formerOccupations: string[]
  status: Status
  age: number
  height: number
  bloodType: string
  birthday: string
  devilFruit: DevilFruit
}

export interface DevilFruit {
  id: string
  image: string
  japaneseName: string
  englishName: string
  meanings: string[]
  type: string
}