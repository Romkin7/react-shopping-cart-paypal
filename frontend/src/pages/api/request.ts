import ILoginBody from '../../@types/loginBody';

async function request(url: string, method: string, body?: ILoginBody) {
    return fetch(url, {
        method,
        headers: {
            'content-type': 'application/json',
        },
        ...(body && { body: JSON.stringify(body) }),
    })
        .then(async (response) => {
            if (!response.ok) {
                throw response;
            }
            return await response.json();
        })
        .then((data) => {
            return data;
        })
        .catch(async (error) => {
            const errorResponse = await error.json();
            throw errorResponse;
        });
}

export default request;
