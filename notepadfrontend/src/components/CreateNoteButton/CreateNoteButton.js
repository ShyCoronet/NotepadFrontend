import React from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/actions'

export default function CreateNoteButton() {
    
    const dispatch = useDispatch()

    return(
        <button className='btn create-btn' onClick={() => dispatch(addNote())}>
            <b>New note</b>
        </button>
    )
}