import { Character } from '@/types/character'

interface Page {
  [key: string]: Character[]
}

export function createPages(array: any[], itemsPerPage: number) {
  const pages: Page = {}
  
  for (let i = 0; i < array.length; i += itemsPerPage) {
    const pageKey = `page${Math.ceil((i + 1) / itemsPerPage)}`
    pages[pageKey] = array.slice(i, i + itemsPerPage)
  }
  
  return pages
}