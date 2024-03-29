import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Form from '../components/Form/Form';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import ILoginBody from '../@types/loginBody';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInUser } from '../store/actions/loggedInUserActions';
import DecodedToken from '../@types/decodedToken';
import { Navigate } from 'react-router-dom';
import { AppState } from '../store/store';
import request from './api/request';
import {
    resetFlashMessage,
    setFlashMessage,
} from '../store/actions/flashMessageActions';

/**
 * resetLoginPageState function, is used to reset Login form state.
 * @returns {ILoginBody}
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
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setLoginPageState({
            ...loginPageState,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(resetFlashMessage());
        const formData = new FormData(event.target as HTMLFormElement);
        request(
            (event.target as HTMLFormElement).action,
            (event.target as HTMLFormElement).method,
            {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            },
        )
            .then((data) => {
                dispatch(
                    setFlashMessage({
                        variant: 'success',
                        text: data.message,
                        isVisible: true,
                    }),
                );
                window.localStorage.setItem('accessToken', data.accessToken);
                const decodedToken: DecodedToken = jwtDecode(data.accessToken);
                dispatch(setLoggedInUser(decodedToken.loggedInUser));
            })
            .catch((error) => {
                dispatch(
                    setFlashMessage({
                        variant: 'danger',
                        text: error.message,
                        isVisible: true,
                    }),
                );
            });
    };

    return (
        <section>
            {loggedInUser.isAuthenticated && (
                <Navigate
                    to={`/profile/${loggedInUser?.user?._id}`}
                    replace={true}
                />
            )}
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
                                    <div className="mt-4">
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
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
