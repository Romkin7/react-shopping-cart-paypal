import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Form from '../components/Form/Form';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import ILoginBody from '../@types/loginBody';
import login from './api/login';
import FlashMessage from '../components/FlashMessage/FlashMessage';
import IFlashMessage from '../@types/flashMessage';
import { jwtDecode } from 'jwt-decode';

/**
 * resetLoginPageState function, is used to reset Login form state.
 * @returns {LoginPageState}
 */
function resetLoginPageState(): ILoginBody {
    return {
        email: '',
        password: '',
    };
}

const LoginPage: FC = () => {
    const [loginPageState, setLoginPageState] = useState<ILoginBody>(() =>
        resetLoginPageState(),
    );
    const [flashMessage, setFlashMessage] = useState<IFlashMessage | null>(
        () => null,
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setLoginPageState({
            ...loginPageState,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFlashMessage(null);
        const formData = new FormData(event.target as HTMLFormElement);
        login(
            (event.target as HTMLFormElement).action,
            (event.target as HTMLFormElement).method,
            {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            },
        )
            .then((data) => {
                setFlashMessage({ variant: 'success', text: data.message });
                window.localStorage.setItem('accessToken', data.accessToken);
                const decodedToken = jwtDecode(data.accessToken);
                console.log(decodedToken);
            })
            .catch((error) => {
                setFlashMessage({ variant: 'danger', text: error.message });
            });
    };

    return (
        <section>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-4 py-5">
                        <h1>Login</h1>
                        <Form
                            method="POST"
                            action="http://localhost:8080/auth/login"
                            handleSubmit={handleSubmit}
                        >
                            <div className="row">
                                <div className="col-12">
                                    <TextInput
                                        input={{
                                            type: 'email',
                                            id: 'email',
                                            name: 'email',
                                            required: true,
                                            autoFocus: true,
                                        }}
                                        labelText="Email"
                                        value={loginPageState.email}
                                        handleChange={handleChange}
                                    />
                                    <TextInput
                                        input={{
                                            type: 'password',
                                            id: 'password',
                                            name: 'password',
                                            required: true,
                                            autoFocus: true,
                                        }}
                                        handleChange={handleChange}
                                        labelText="Password"
                                        value={loginPageState.password}
                                    />
                                </div>
                                <div className="col-12">
                                    <Button
                                        type="submit"
                                        variant="success"
                                        size="s"
                                        borderRadius="rounded"
                                    >
                                        Login
                                    </Button>
                                    {flashMessage && (
                                        <FlashMessage
                                            variant={flashMessage.variant}
                                        >
                                            {flashMessage.text}
                                        </FlashMessage>
                                    )}
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
