import { combineReducers } from "redux";
import { notesReducer } from "./noteReducer";
import { userReducer } from "./userReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer,
    app: appReducer
})