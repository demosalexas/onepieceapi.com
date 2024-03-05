import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'

import { createPages } from '@/utils/createPages'
import data from '@/data/characters.json' 

export async function GET(request: Request) {
  // const file = await fs.readFile(process.cwd() + '/src/data/characters.json', 'utf8')
  // const data = JSON.parse(file)
  // console.log(data)
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.searchParams)
  const currentPage = Number(searchParams.get('page'))

  // const pages = createPages(data, 20)
  // console.log(pages)

  if(typeof currentPage === 'number') {

  }

  // Search Params : bounty, age, status, origin ...

  const info = {
    "count": 23, // data.length,
    "pages": 23,
    "currentPage": Number(searchParams.get('page')),
    "next": "",
    "previous": ""
  }

  // console.log(data.length, "data")

  return NextResponse.json({
    info,
    data: data,
  })
}