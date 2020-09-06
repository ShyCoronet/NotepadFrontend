import { fetchWithAuth } from '../../../Authentication'

export async function requestNotes() {
    const response = await fetchWithAuth('https://localhost:44321/api/notes', 
    {
        method: 'GET',
        headers: {'Content-Type' : 'application/json'}
    })
    return await response.json()
}
