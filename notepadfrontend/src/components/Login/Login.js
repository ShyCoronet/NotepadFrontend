import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { setToken } from '../../redux/actions'
import { useDispatch } from 'react-redux'

export default function Login() {

    let [userData, setUserData] = useState({
        login: '',
        password: ''
    })

    let [redirect, setRedirect] = useState(null)

    const dispath = useDispatch()
    
    function send() {
        fetch('https://localhost:44321/api/token', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(userData)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(token => {
            dispath(setToken(token))
            setRedirect(<Redirect to='home'/>)
        })
    }


    return(
        <div>
            <input type='text' value={userData.login} onChange={e => 
                setUserData({...userData, login: e.target.value})}></input>
            <input type='text' value={userData.password} onChange={e => 
                setUserData({...userData, password: e.target.value})}></input>
            <button type='submit' onClick={() => send()}></button>
            {redirect}
        </div>
    )
}