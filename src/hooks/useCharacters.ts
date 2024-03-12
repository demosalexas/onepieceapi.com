'use client'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export default function useCharacters () {
  const { data, error, isLoading } = useSWR(
    '/api/characters',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
   
  return {
    data,
    isLoading,
    isError: error
  }
}