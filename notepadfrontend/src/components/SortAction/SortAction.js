import React from "react";
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {setSortType} from "../../redux/actions";

export default function SortAction({name, sortType}) {
    const type = sortType
    const dispatch = useDispatch()
    const activeType = useSelector(state => state.notes.noteSortPredicate)

    function toggleSortType() {
        dispatch(setSortType(type))
    }

    return (
        <li className={activeType === type ? 'predicate predicate-active'
        : "predicate predicate-inactive"}
        onClick={toggleSortType}>{name}</li>
    )
}