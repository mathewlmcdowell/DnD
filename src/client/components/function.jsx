export const checkLogin = async () => {

    const initiativeToken = sessionStorage.getItem('initiativeToken');

    // if there is no token in storage
    if (!initiativeToken) {
        return { login: false, user: null };
    }

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${initiativeToken}`);

    const response = await fetch('http://localhost:3000/api/users/login', {
        headers: headers,
        method: 'GET',
    });
    let data = await response.json();

    if (data.error) {
        return { login: false, user: null }
    } else {
        return { login: true, user: data.data }
    }

}