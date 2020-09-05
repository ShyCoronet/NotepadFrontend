export async function fetchWithAuth(url, options, history) {
    let tokenData = null

    if (localStorage.tokenData) {
        tokenData = JSON.parse(localStorage.tokenData)
        options.headers['Authorization'] = `Bearer ${tokenData.accessToken}`
    }
    else {
        history.push('/login')
        return Promise.reject()
    }

    if (Date.now() >= tokenData.lifeTimeInSeconds * 1000) {
        const result = await refreshTokenData(tokenData.refreshToken)

        if (result === Promise.reject()) {
            history.push('/login')
            return Promise.reject()
        }

        options.headers['Authorization'] = `Bearer ${(JSON.parse(localStorage.tokenData)).accessToken}`
    }
    return fetch(url, options)
}


async function refreshTokenData(refreshToken) {
    await fetch('https://localhost:44321/api/refresh_token', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body : JSON.stringify(refreshToken)
    }).then(response => {
        if (response.ok) {
            response.json().then(tokenData => 
                saveTokenData(tokenData))
        }
        else {
            return new Promise.reject()
        }
    })
}

export function saveTokenData(tokenData) {
    localStorage.setItem('tokenData', JSON.stringify(tokenData))
}

function getTokenDataOrDefault() {
    let tokenData = null

    if (localStorage.tokenData) {
        tokenData = JSON.parse(localStorage.tokenData)
    }

    return tokenData
}


function checkingTokenLifeTime(lifeTime) {
    let isAlive = true
    
    if (Date.now() >= lifeTime * 1000) {
        isAlive = false
    }

    return isAlive
}