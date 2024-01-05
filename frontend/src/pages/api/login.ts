import ILoginBody from '../../@types/loginBody';

async function login(url: string, method: string, body: ILoginBody) {
    return fetch(url, {
        method,
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then(async (response) => {
            if (!response.ok) {
                throw response;
            }
            return await response.json();
        })
        .then((data) => {
            console.log('we got data');
            return data;
        })
        .catch(async (error) => {
            console.log('we got an error');
            const errorResponse = await error.json();
            throw errorResponse;
        });
}

export default login;
