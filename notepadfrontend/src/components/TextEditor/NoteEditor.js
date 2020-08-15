import React, { useState } from 'react'
import './style.css'
import { changeNote } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { BOLD, ITALIC, UNDERLINE } from './styleConst'
import { Editor, convertToRaw, convertFromRaw, SelectionState, EditorState, ContentState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { createEditor } from './Tools/DraftContentTools'


export default function NoteEditor({activeNote}) {

    const notes = useSelector(state => state.notes.notes)
    const dispatch = useDispatch()

    let editorState = createEditor(activeNote.content.contentState,
        activeNote.content.selectionState)

    function toggleStyle(styleType) {
        dispatch(changeNote(notes,
            {...activeNote, content: {
                contentState: convertToRaw(RichUtils.toggleInlineStyle(editorState, styleType)
                .getCurrentContent()),
                selectionState: editorState.getSelection()
            }}))
    }

    return(
        <div className='text-editor'>
            <div className='tool-bar'>
                <button onMouseDown={(e) => {
                    e.preventDefault()
                    toggleStyle(BOLD)
                    console.log(editorState.getCurrentContent().getBlocksAsArray())
                }}>B</button>
            </div>
            <div className='text-title'>
                <input type='text' className='text-title-field' 
                placeholder='Введите название' value={activeNote.name}></input>
            </div>
            <div className='text-box'>
                <Editor editorState={editorState} onChange={state => {
                dispatch(changeNote(notes, {...activeNote, content: {
                    contentState: convertToRaw(state.getCurrentContent()),
                    selectionState: state.getSelection()
                }}))
                }}/>
            </div>
        </div>
    )
}