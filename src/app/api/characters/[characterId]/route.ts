import { NextResponse } from 'next/server'

import data from '@/data/characters.json' 

export async function GET(
  request: Request,
  { params }: { params: { characterId: string } }
  ) {

  const characterId = params.characterId
  const character = data.find(({ id }) => id === characterId)

  if(!character) {
    return NextResponse.json({ error: 'Character not found' }, { status: 404 })
  }

  return NextResponse.json(character)
}