import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { createNote } from '../../redux/actions'
import { useHistory } from 'react-router-dom'

export default function CreateNoteButton() {
    
    const dispatch = useDispatch()

    const history = useHistory()

    return(
        <button className='create-btn' onClick={() => dispatch(createNote(history))}>
            <b>New note</b>
        </button>
    )
}