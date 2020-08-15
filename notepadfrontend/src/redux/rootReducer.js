import { combineReducers } from "redux";
import { notesReducer } from "./noteReducer";

export const rootReducer = combineReducers({
    notes: notesReducer
})