import { fetchWithAuth } from '../../utils/Authentication'

export async function requestNote() {
    const response = await fetchWithAuth('https://localhost:44321/api/note',
        {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
        })
    return await response.json()
}