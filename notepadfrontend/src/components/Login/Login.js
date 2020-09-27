import React, { useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import { saveTokenData } from '../../utils/Authentication'
import notepad from '../../images/Notepad.png'

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

    function RedirectToSignUpPage() {
        history.push('/signup')
    }


    return(
        <div className='login-container'>
                <img className='login-image' src={notepad}/>
            <div className='right-container'>
                <div>
                    <h1 className='logo'>Notepad</h1>
                </div>
                <div className='login-form'>
                    <input className='inpt login-input' type='text' value={userData.login} placeholder='Login'
                           onChange={e => setUserData({...userData, login: e.target.value})}/>
                    <input className='inpt login-input' type='password' value={userData.password} placeholder='Password'
                           onChange={e => setUserData({...userData, password: e.target.value})}/>
                    <div className='login-buttons-container'>
                        <button className='btn login-btn' type='submit' onClick={Login}>Login</button>
                        <button className='btn signup-redirect-btn' onClick={RedirectToSignUpPage}
                                type='submit'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}