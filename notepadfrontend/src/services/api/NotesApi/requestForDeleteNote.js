import { fetchWithAuth } from '../../../Authentication'

export async function requestForDeleteNote(noteId) {
    const response = await fetchWithAuth('https://localhost:44321/api/note', 
    {
        method: 'DELETE',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(noteId)
    })

    return response.json()
}