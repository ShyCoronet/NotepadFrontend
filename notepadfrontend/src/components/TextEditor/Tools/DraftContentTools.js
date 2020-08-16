import { SelectionState, convertFromRaw, EditorState } from "draft-js";


export function selectionConverter(rawSelectionState) { 
    let selectionState = SelectionState.createEmpty()
    const keys = ['anchorKey', 'anchorOffset', 'focusKey', 'focusOffset', 'isBackward', 'hasFocus']
    keys.forEach(key => {
        selectionState = selectionState.set(key, rawSelectionState[key])
    })
    return selectionState
}

export function createEditor(rawContent, rawSelection) {
    const editorStateWithContent = EditorState.createWithContent(convertFromRaw(rawContent))
    const editorStateWithContentAndSelection = EditorState.acceptSelection(editorStateWithContent,
        selectionConverter(rawSelection))
    return editorStateWithContentAndSelection
}