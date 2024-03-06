import Hero from "@/components/hero"
import OnePieceApiInfo from "@/components/one-piece-api-info"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: '',
}

export default function About() {
  if(true) {
    return <Hero />
  }
  
  return (
    <>
      
    </>
  )
}
