import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Form from '../components/Form/Form';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';

interface LoginPageState {
    email: string;
    password: string;
}

/**
 * resetLoginPageState function, is used to reset Login form state.
 * @returns {LoginPageState}
 */
function resetLoginPageState(): LoginPageState {
    return {
        email: '',
        password: '',
    };
}

const LoginPage: FC = () => {
    const [loginPageState, setLoginPageState] = useState<LoginPageState>(() =>
        resetLoginPageState(),
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
        console.log(event);
    };
    return (
        <section>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-4 py-5">
                        <h1>Login</h1>
                        <Form
                            method="post"
                            action="http://localhost:8080/login"
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
