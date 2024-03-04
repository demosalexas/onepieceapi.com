import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    characters: 'https://onepieceapi.com/api/characters'
  })
}
