type Type = 'Paramecia' | 'Zoan' | 'Logia'

export interface DevilFruit {
  id: string
  image: string
  japaneseName: string
  romanizedName: string
  englishName: string
  meanings: string[]
  type: Type
}