import React from 'react'
import './styel.css'

export function Alert({message}) {
    return(
        <div className='alert-container'>
            <label className='alert'>{message}</label>
        </div>
    )
}