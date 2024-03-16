type Type = 'Paramecia' | 'Zoan' | 'Logia' | 'Artificial Zoan' | 'Artificial Paramecia' | 'Artificial Mythical Zoan'

export interface DevilFruit {
  id: string
  image: string
  name: {
    japanese: string
    romanized: string
    english: string
  }
  type: Type
  model?: string
}