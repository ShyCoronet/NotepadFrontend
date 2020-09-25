import React from 'react'
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.notes.searchBarValue)
    return(
        <div className='search-bar'>
            <input className='search-field' type='text' placeholder='Search'
            value={searchValue} onChange={event => dispatch(setSearchValue(event.target.value.toLowerCase()))}/>
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="#ceced0" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
        </div>
    )
}