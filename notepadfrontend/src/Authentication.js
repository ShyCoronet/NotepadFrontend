export async function fetchWithAuth(url, options) {
    let tokenData = getTokenDataOrDefault()

    if (tokenData === null) {
        window.location.replace('/login')
        return Promise.reject(new Error('Not found jwt data'))
    }

    if (!checkingTokenLifeTime(tokenData.lifeTimeInSeconds)) {
        try {
            await refreshTokenData(tokenData.refreshToken)
            tokenData = getTokenDataOrDefault()
        }
        catch {
            window.location.replace('/login')
            return Promise.reject(new Error('failed to update token'))
        }
    }

    options.headers['Authorization'] = `Bearer ${tokenData.accessToken}`

    return fetch(url, options)
}


async function refreshTokenData(refreshToken) {
    await fetch('https://localhost:44321/api/refresh_token', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body : JSON.stringify(refreshToken)
    }).then(response => {
        if (response.ok) {
            response.json().then(newTokenData =>
                saveTokenData(newTokenData))
                return Promise.resolve()
        }
        
        return Promise.reject(new Error('Failed to refresh'))
    })
}

export function saveTokenData(tokenData) {
    localStorage.setItem('tokenData', JSON.stringify(tokenData))
}

export function getTokenDataOrDefault() {
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