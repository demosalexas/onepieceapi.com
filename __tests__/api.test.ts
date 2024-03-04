/**
* @jest-environment node
*/

import { GET } from '../src/app/api/route'

async function readableStreamToString(readableStream: ReadableStream) {
  const reader = readableStream.getReader()
  let result = ''
  let done = false

  while (!done) {
    const { value, done: readDone } = await reader.read();
    if (readDone) {
      done = true
    } else {
      result += new TextDecoder().decode(value);
    }
  }

  return result
}

describe('API Route: /api', () => {
    it('Should return something', async () => {
        const response = await GET()

        expect(response.status).toBe(200)

        const body = await readableStreamToString(response.body)
        expect(JSON.parse(body).characters).toBe('https://onepieceapi.com/api/characters')
    })
})