export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args)
  return response.json()
}