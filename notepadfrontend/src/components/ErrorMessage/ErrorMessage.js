import React from 'react'
import './style.css'

export function ErrorMessage({message}) {
    return(
        <div className='error-message-container'>
            <label className='error-message'>{message}</label>
        </div>
    )
}