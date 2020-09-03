import React from 'react'
import './style.css'
import { convertFromHTML, ContentState } from 'draft-js'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteNote } from '../../redux/actions'

export default function Note ({note, addedClass, actived}) {

    const name = note.name.trim()
    const blocksFromHtml = convertFromHTML(note.content)
    const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
    )
    const summary = contentState.getPlainText(' ')

    const dispath = useDispatch()
    let history = useHistory()

    return(
        <li className={'note' + addedClass} onClick={actived}>
            <p className='note-title'>{name === ''
                ? 'Без названия' : name.length > 30
                ? name.slice(0, 30) + '....' : name}</p>
            <button className='delete' onClick={(e) => {
                dispath(deleteNote(note.noteId, history))
                e.stopPropagation()
            }}>
                <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-trash" fill="#ceced0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
            <p className='note-summary'>{summary === ''
                ? 'Пусто' : summary.length > 30
                ? summary.slice(0, 30) + '....' : summary}</p>
            <p className='note-created-time'>{note.creationDateTime}</p>
            <hr></hr>
        </li>
    )
}