import { fetchWithAuth } from '../../utils/Authentication'

export async function requestForUpdateNote(updatedNote) {
    const response = await fetchWithAuth('https://localhost:44321/api/note', 
        {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updatedNote)
        })

    return await response.json()
}