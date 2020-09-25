import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getTokenDataOrDefault} from '../../Authentication'

export function PrivateRoute({component: Component, ...rest}) {

    return (
        <Route
        {...rest}
        render={() => getTokenDataOrDefault !== null ? <Component/>
            : <Redirect to='/login'/>}/>
    )
}