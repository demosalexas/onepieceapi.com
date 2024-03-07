import Hero from '@/components/hero'
import { IN_DEV } from '@/consts/in-dev'

export default function Home() {
  if(IN_DEV) return <Hero />

  return (
    <>
    </>
  )
}
