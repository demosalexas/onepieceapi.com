type Type = 'Paramecia' | 'Zoan' | 'Logia' | 'Artificial Zoan' | 'Artificial Paramecia' | 'Artificial Mythical Zoan'

export interface DevilFruit {
  id: string
  image: string
  japaneseName: string
  romanizedName: string
  englishName: string
  name: {
    japanese: string
    romanized: string
    english: string
  }
  meanings: string[]
  type: Type
  model?: string
}