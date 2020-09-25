import React, {useState} from 'react'
import './style.css'
import SortAction from "../SortAction/SortAction";
import {SORT_ALPHABETICALLY, SORT_BY_CREATION_TIME, SORT_BY_LAST_UPDATE} from './sortTypes'

export default function SortSettings() {

    let [menuDisplayState, setDisplay] = useState(false)

    function ShowOrHideMenu() {
        if (!menuDisplayState) {
            setDisplay(true)
        }
        else {
            setDisplay(false)
        }
    }

    const dropDownMenu =
        <div className='sort-dropdown-menu'>
            <ul className='predicate-list'>
                <SortAction name={'Az'} sortType={SORT_ALPHABETICALLY}/>
                <SortAction name={'Creation Data'} sortType={SORT_BY_CREATION_TIME}/>
            </ul>
        </div>

    return (
        <div>
            <button className='sort-button' onClick={ShowOrHideMenu}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-filter-square" fill="#ceced0"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fillRule="evenodd"
                          d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            {menuDisplayState ? dropDownMenu : null}
        </div>
    )
}