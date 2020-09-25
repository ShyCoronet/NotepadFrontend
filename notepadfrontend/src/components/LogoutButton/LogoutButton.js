import React from 'react'
import './style.css'

export default function LogoutButton() {

    function logout() {
        localStorage.clear()
        window.location.replace('/login')
    }

    return(
        <div>
            <button className='btn logout-btn' onClick={logout}>Logout</button>
        </div>
    )
}