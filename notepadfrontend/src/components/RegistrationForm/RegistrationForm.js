import React, { useState } from 'react'


export default function RegistrationForm() {

    let [formState, setForm] = useState({
        email: null,
        login: null,
        password: null,
        confirmPassword: null
    })

    function confirmRegistration() {
        fetch('https://localhost:44321/api/registration', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(formState)
        })
    }

    return(
        <div>
            <input type='text' value={formState.email} onChange={e => setForm({...formState, email: e.target.value})}></input>
            <input type='text' value={formState.login} onChange={e => setForm({...formState, login: e.target.value})}></input>
            <input type='text' value={formState.password} onChange={e => setForm({...formState, password: e.target.value})}></input>
            <input type='text' value={formState.confirmPassword} onChange={e => setForm({...formState, confirmPassword: e.target.value})}></input>
            <button onClick={() => confirmRegistration()}></button>
        </div>
    )
}