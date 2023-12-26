import ILoginBody from '../../@types/loginBody';

async function login(url: string, method: string, body: ILoginBody) {
    return fetch(url, {
        method,
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => console.error('Error ', error));
}

export default login;
