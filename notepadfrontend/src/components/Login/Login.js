import React, { useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import { saveTokenData } from '../../AuthenticationFetch'

export default function Login() {

    let [userData, setUserData] = useState({
        login: '',
        password: ''
    })

    let history = useHistory()
    
    function Login() {
        fetch('https://localhost:44321/api/token', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(userData)
        }).then(response => {
            if (response.ok) {
                return response.json()
                .then(token => {
                    saveTokenData(token)
                    history.push('/notepad')
                })
            }
        })
    }


    return(
        <div class='login-form'>
            <input type='text' value={userData.login} onChange={e => 
                setUserData({...userData, login: e.target.value})}></input>
            <input type='text' value={userData.password} onChange={e => 
                setUserData({...userData, password: e.target.value})}></input>
            <button type='submit' onClick={() => Login()}></button>
        </div>
    )
}