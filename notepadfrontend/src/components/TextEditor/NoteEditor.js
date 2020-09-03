import React, { useState } from 'react'
import './style.css'
import { changeNote } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { BOLD, ITALIC, UNDERLINE } from './styleConst'
import { Editor, EditorState, RichUtils, convertFromHTML, ContentState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import debounce from 'lodash/debounce'
import { stateToHTML } from 'draft-js-export-html'
import { fetchWithAuth } from '../../AuthenticationFetch'

export default function NoteEditor({activeNote}) {

    const notes = useSelector(state => state.notes.notes)

    const token = useSelector(state => state.notes.token)
    const blocksFromHtml = convertFromHTML(activeNote.content)
    const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
    )
    let [editorState, setEditorState] = useState(EditorState.createWithContent(contentState))

    const dispatch = useDispatch()

    function toggleStyle(style) {
        const editorStateWithStyle = RichUtils.toggleInlineStyle(editorState, style)
        const rawContent = stateToHTML(editorStateWithStyle.getCurrentContent())
        const updatedNote = {...activeNote, content: rawContent}
        onSaveToServer(updatedNote)
        dispatch(changeNote(notes, updatedNote, token))
        setEditorState(editorStateWithStyle)
    }

    function onSaveServer(updatedNote) {
        debounce(() => {
            fetch('https://localhost:44321/api/note', 
            {
                method: 'PUT',
                headers: {'Authorization' : `Bearer ${token}`,
                'Content-type' : 'application/json'},
                body: JSON.stringify(updatedNote)
            })
        }, 1000)
    }

    const onSaveToServer = debounce((updatedNote) => {
        fetchWithAuth('https://localhost:44321/api/note', 
        {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updatedNote)
        })
    }, 1000)
    

    return(
        <div className='text-editor'>
            <div className='tool-bar'>
                <button className='tool-btn bold' onMouseDown={(e) => {
                    e.preventDefault()
                    toggleStyle(BOLD)
                }}>B</button>
                <button className='tool-btn italic' onMouseDown={(e) => {
                    e.preventDefault()
                    toggleStyle(ITALIC)
                }}>I</button>
                <button className='tool-btn underline' onMouseDown={(e) => {
                    e.preventDefault()
                    toggleStyle(UNDERLINE)
                }}>U</button>
            </div>
            <div className='text-title'>
                <input type='text' className='text-title-field' 
                placeholder='Enter the title' value={activeNote.name}
                onChange={event => {
                    const updatedNote = {...activeNote, name: event.target.value}
                    onSaveToServer(updatedNote)
                    dispatch(changeNote(notes, updatedNote, token))
                }}></input>
            </div>
            <div className='text-box'>
                <Editor editorState={editorState} onChange={state => {
                    const rawContent = stateToHTML(state.getCurrentContent())
                    const updatedNote = {...activeNote, content: rawContent}
                    onSaveToServer(updatedNote)
                    dispatch(changeNote(notes, updatedNote, token))
                    setEditorState(state)
                }}/>
            </div>
        </div>
    )
}