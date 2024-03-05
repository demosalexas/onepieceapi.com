import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'

interface Item {
  id: string
}

interface Page {
  [key: string]: Item[]
}

function createPages(array: any[], itemsPerPage: number) {
  const pages: Page = {}

  for (let i = 0; i < array.length; i += itemsPerPage) {
    const pageKey = `page${Math.ceil((i + 1) / itemsPerPage)}`
    pages[pageKey] = array.slice(i, i + itemsPerPage)
  }

  return pages
}

// Example usage:
const originalArray = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
];

const itemsPerPage = 2;
const result = createPages(originalArray, itemsPerPage);
console.log(result['page1']);

export async function GET(request: Request) {
  const file = await fs.readFile(process.cwd() + '/src/app/api/characters/characters.json', 'utf8')
  const data = JSON.parse(file)

  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.searchParams)

  // const page = request.url.searchParams.get('page');

  // Search Params : bounty, age, status, origin ...

  console.log(searchParams.get('page'))

  const pages = [{}]

  const info = {
    "count": data.length,
    "pages": 23,
    "next": "",
    "previous": ""
  }

  return NextResponse.json({
    info,
    data,
  })
}