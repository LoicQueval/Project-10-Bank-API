export const userLogin = (email, password) => {
    fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
        .then(async (res) => {
                if (res.ok) {
                    // Store access token from API in local cookie
                    const response = await res.json()
                    document.cookie = `access_token=${response.body.token}; path=/; SameSite=Strict`;
                    document.location.href = '/profile'
                    return (response)
                } else {
                    console.error('Retour du serveur : ', res.status)
                }
            }
        )
        .catch(error => {
            console.log(error);
        });
}
export const userLogout = () => {
    document.cookie = 'access_token' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export const getUserData = async () => {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('access_token='));
    const accessToken = tokenCookie ? tokenCookie.split('=')[1] : null;

    return await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(async (res) => {
            if (res.ok) {
                const response = await res.json();
                return (response.body)
            } else {
                document.location.href = '/login'
            }
        })
        .catch(error => {
            console.log(error);
        });
}

