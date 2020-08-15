import React from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { createNote } from '../../redux/actions'

export default function CreateNoteButton() {

    const dispatch = useDispatch()

    return(
        <button className='create-btn' onClick={() => dispatch(createNote())}>
            <b>New note</b>
        </button>
    )
}