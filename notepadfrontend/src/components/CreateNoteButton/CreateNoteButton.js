import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { createNote } from '../../redux/actions'

export default function CreateNoteButton() {
    
    const dispatch = useDispatch()

    const token = useSelector(state => state.notes.token)

    return(
        <button className='create-btn' onClick={() => dispatch(createNote(token.access_token, token.login))}>
            <b>New note</b>
        </button>
    )
}