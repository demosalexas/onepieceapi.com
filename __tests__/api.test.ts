/**
* @jest-environment node
*/

import { GET } from '../src/app/api/route'
import { readableStreamToString } from '@/utils/readableStreamToString'


describe('API Route: /api', () => {
    it('Should return something', async () => {
        const response: any = await GET()

        expect(response.status).toBe(200)

        const body = await readableStreamToString(response.body)
        expect(JSON.parse(body).characters).toBe('https://onepieceapi.com/api/characters')
    })
})