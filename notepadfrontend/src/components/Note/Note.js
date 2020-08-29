import React from 'react'
import './style.css'
import { convertFromHTML, ContentState } from 'draft-js'

export default function Note ({note, addedClass, actived}) {

    const name = note.name.trim()
    const blocksFromHtml = convertFromHTML(note.content)
    const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
    )
    const summary = contentState.getPlainText(' ')

    return(
        <li className={'note' + addedClass} onClick={actived}>
            <p className='note-title'>{name === ''
                ? 'Без названия' : name.length > 30
                ? name.slice(0, 30) + '....' : name}</p>
            <p className='note-summary'>{summary === ''
                ? 'Пусто' : summary.length > 30
                ? summary.slice(0, 30) + '....' : summary}</p>
            <p className='note-created-time'>{note.creationDateTime}</p>
            <hr></hr>
        </li>
    )
}