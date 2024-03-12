import { NextResponse } from 'next/server'

import { createPages } from '@/utils/createPages'
import data from '@/data/characters.json' 

export async function GET(request: Request) {
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.searchParams)
  const currentPage: number | undefined = Number(searchParams.get('page')) 
  const numberOfCharacters: number = data.length
  const pages = createPages(data, 20)
  const numberOfPages: number = Object.keys(pages).length

  let page: any[] = pages[`page1`]

  if(typeof currentPage === 'number' && currentPage <= numberOfPages && currentPage > 0) {
    page = pages[`page${currentPage}`]
  }

  const baseUrl = 'https://onepieceapi.com/api/characters'
  const nextUrl = `${baseUrl}?page=${currentPage <= numberOfPages && currentPage > 0 ? currentPage + 1 : 2}`
  const previousUrl = `${baseUrl}?page=${currentPage <= numberOfPages && currentPage > 0 ? currentPage - 1 : null}`

  const info = {
    characters: numberOfCharacters,
    pages: numberOfPages,
    currentPage: currentPage,
    next: nextUrl,
    previous: previousUrl,
  }

  // const bounty: number | undefined = Number(searchParams.get('bounty')) 
  // console.log(bounty)

  return NextResponse.json({
    info,
    data: page,
  })
}