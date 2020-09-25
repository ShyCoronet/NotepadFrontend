import React, { useState } from 'react'
import './style.css'
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";
import {Alert} from "../Alert/Alert";


export default function SignUp() {

    let [formState, setFormState] = useState({
        email: '',
        login: '',
        password: '',
        confirmPassword: '',
        emailIsValid: false,
        loginIsValid: false,
        passwordIsValid: false,
        confirmPasswordIsValid: false
    })

    let [loginError, setLoginError] = useState(null)
    let [emailError, setEmailError] = useState(null)
    let [passwordError, setPasswordError] = useState(null)
    let [confirmPasswordError, setConfirmPasswordError] = useState(null)

    function confirmRegistration() {
        fetch('https://localhost:44321/api/sign_up', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(formState)
        })
    }

    function emailCheck(email) {
        const regExp = /[@]\S+[.]\S+/
        return regExp.exec(email)
    }

    function loginCheck(login) {
        return login.length >= 6
    }

    function passwordCheck(password) {
        return password.length >= 8
    }


    function confirmedPasswordCheck(confirmPassword) {
        return formState.password === confirmPassword
    }

    function checkAllValidates() {
        return formState.loginIsValid &&
            formState.emailIsValid &&
            formState.passwordIsValid &&
            formState.confirmPasswordIsValid
    }

    return(
        <div className='signup-container'>
            <div className='signup-form'>
                <input className='inpt signup-field' type='text' value={formState.login}
                       placeholder='Login' onChange={e => {
                           const login = e.target.value
                    const isValid = loginCheck(login)
                    setFormState({...formState, login: login, loginIsValid: isValid})
                    setLoginError(!isValid ? <ErrorMessage message={'Логин слишком короткий'}/> : null)}}/>
                {loginError}

                <input className='inpt signup-field' type='text' value={formState.email}
                       placeholder='Email' onChange={e => {
                           const email = e.target.value
                    const isValid = emailCheck(email)
                    setFormState({...formState, email: email, emailIsValid: isValid})
                    setEmailError(!isValid ? <ErrorMessage message={'Email введен неверно'}/> : null)}}/>
                {emailError}

                <input className='inpt signup-field' type='password' value={formState.password}
                       placeholder='Password' onChange={e => {
                           const password = e.target.value
                    const isValid = passwordCheck(password)
                    setFormState({...formState, password: password, passwordIsValid: isValid})
                    setPasswordError(!isValid ? <ErrorMessage message={'Пароль слишком короткий'}/> : null)}}/>
                {passwordError}

                <input className='inpt signup-field' type='password' value={formState.confirmPassword}
                       placeholder='Confirm Password' onChange={e => {
                           const confirmPassword = e.target.value
                    const isValid = confirmedPasswordCheck(confirmPassword)
                    setFormState({...formState, confirmPassword: confirmPassword,
                        confirmPasswordIsValid: isValid})
                    setConfirmPasswordError(!isValid ? <ErrorMessage message={'Пароли не совпадают'}/> : null)}}/>
                {confirmPasswordError}

                {checkAllValidates() === true ?
                    <button className='btn signup-btn' onClick={confirmRegistration}>Sign Up</button>
                : <button className='btn signup-btn' disabled='disabled' onClick={confirmRegistration}>Sign Up</button>}
            </div>
        </div>
    )
}