import React, { useState } from 'react'
import './style.css'
import { updateNote } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { BOLD, ITALIC, UNDERLINE } from './styleConst'
import { Editor, EditorState, RichUtils, convertFromHTML, ContentState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { stateToHTML } from 'draft-js-export-html'

export default function NoteEditor({activeNote}) {

    const blocksFromHtml = convertFromHTML(activeNote.content)
    const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
    )
    let [editorTitleState, setEditorTitleState] = useState(activeNote.name)
    let [editorTextState, setEditorTextState] = useState(EditorState.createWithContent(contentState))

    const dispatch = useDispatch()

    function toggleStyle(style) {
        const editorStateWithStyle = RichUtils.toggleInlineStyle(editorTextState, style)
        const rawContent = stateToHTML(editorStateWithStyle.getCurrentContent())
        const updatedNote = {...activeNote, content: rawContent}
        dispatch(updateNote(updatedNote))
        setEditorTextState(editorStateWithStyle)
    }    

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
                placeholder='Enter the title' value={editorTitleState}
                onChange={event => {
                    const updatedNote = {...activeNote, name: event.target.value}
                    dispatch(updateNote(updatedNote))
                    setEditorTitleState(event.target.value)
                }}></input>
            </div>
            <div className='text-box'>
                <Editor editorState={editorTextState} onChange={state => {
                    const rawContent = stateToHTML(state.getCurrentContent())
                    const updatedNote = {...activeNote, content: rawContent}
                    dispatch(updateNote(updatedNote))
                    setEditorTextState(state)
                }}/>
            </div>
        </div>
    )
}