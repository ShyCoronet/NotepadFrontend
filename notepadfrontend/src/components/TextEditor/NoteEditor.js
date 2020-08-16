import React, { useState } from 'react'
import './style.css'
import { changeNote, onSaveContent } from '../../redux/actions'
import { useDispatch, useSelector, connect } from 'react-redux'
import { BOLD, ITALIC, UNDERLINE } from './styleConst'
import { Editor, convertToRaw, convertFromRaw, SelectionState, EditorState, ContentState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

export default function NoteEditor({activeNote}) {

    const notes = useSelector(state => state.notes.notes)

    let [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(activeNote.content)))

    const dispatch = useDispatch()

    function toggleStyle(style) {
        const editorStateWithStyle = RichUtils.toggleInlineStyle(editorState, style)
        const rawContent = convertToRaw(editorStateWithStyle.getCurrentContent())
        dispatch(changeNote(notes, {...activeNote, content: rawContent}))
        setEditorState(editorStateWithStyle)
    }

    return(
        <div className='text-editor'>
            <div className='tool-bar'>
                <button onMouseDown={(e) => {
                    e.preventDefault()
                    toggleStyle(BOLD)
                }}>B</button>
            </div>
            <div className='text-title'>
                <input type='text' className='text-title-field' 
                placeholder='Введите название' value={activeNote.name}></input>
            </div>
            <div className='text-box'>
                <Editor editorState={editorState} onChange={state => {
                    const content = convertToRaw(state.getCurrentContent())
                    dispatch(changeNote(notes, {...activeNote, content: content}))
                    setEditorState(state)
                }}/>
            </div>
        </div>
    )
}