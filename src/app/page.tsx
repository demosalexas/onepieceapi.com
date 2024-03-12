'use client'

import CharactersSnippet from '@/components/CharactersSnippet'
import Hero from '@/components/hero'
import useCharacters from '@/hooks/useCharacters'

export default function Home() {

  const { data, isLoading } = useCharacters()

  return (
    <>
      <Hero />
      {isLoading ? <h1>Loading</h1> : <CharactersSnippet characters={data.data} />}
    </>
  )
}
