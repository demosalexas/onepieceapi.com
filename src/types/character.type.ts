export interface Character {
  id: string
  image: string
  japaneseName: string
  romanizedName: string
  englishName: string
  debut: string[]
  affiliations: string[]
  occupations: string[]
  status: 'Alive' | 'Unknown'
  age: number
  height: number
  bloodType: string
  birthday: string
  devilFruit: DevilFruit
}

export interface DevilFruit {
  meanings: string[]
  type: string
}