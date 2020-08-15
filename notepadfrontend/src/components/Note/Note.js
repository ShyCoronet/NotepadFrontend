import React from 'react'
import './style.css'

export default function Note ({note, addedClass, actived}) {

    return(
        <li className={'note' + addedClass} onClick={actived}>
            <p className='note-title'>{note.name.trim() === ''
                ? 'Без названия' : note.name.trim().length > 35
                ? note.name.slice(0, 34).trim() + '....' : note.name.trim()}</p>
            <p className='note-summary'>Что-то есть</p>
            <p className='note-created-time'>{note.creationTime}</p>
            <hr></hr>
        </li>
    )
}