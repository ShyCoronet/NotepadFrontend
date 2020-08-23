import React from 'react'
import './style.css'
import { convertFromRaw } from 'draft-js'

export default function Note ({note, addedClass, actived}) {

    const name = note.name.trim()
    const summary = convertFromRaw(note.content).getPlainText(' ')

    return(
        <li className={'note' + addedClass} onClick={actived}>
            <p className='note-title'>{name === ''
                ? 'Без названия' : name.length > 30
                ? name.slice(0, 30) + '....' : name}</p>
            <p className='note-summary'>{summary === ''
                ? 'Пусто' : summary.length > 30
                ? summary.slice(0, 30) + '....' : summary}</p>
            <p className='note-created-time'>{note.creationTime}</p>
            <hr></hr>
        </li>
    )
}