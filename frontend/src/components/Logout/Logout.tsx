import { FC, FormEvent } from 'react';
import Form from '../Form/Form';
import request from '../../pages/api/request';
import { useDispatch } from 'react-redux';
import { resetLoggedInUser } from '../../store/actions/loggedInUserActions';
import { setFlashMessage } from '../../store/actions/flashMessageActions';

interface LogoutProps {
    _id: string;
}

const Logout: FC<LogoutProps> = ({ _id }) => {
    const dispatch = useDispatch();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        request((event.target as HTMLFormElement).action, 'DELETE').then(
            (data) => {
                window.localStorage.removeItem('accessToken');
                dispatch(resetLoggedInUser());
                dispatch(
                    setFlashMessage({
                        variant: 'success',
                        text: data.message,
                        isVisible: true,
                    }),
                );
            },
        );
    };
    return (
        <Form
            method="POST"
            action={`http://localhost:8080/auth/${_id}/logout`}
            handleSubmit={handleSubmit}
        >
            <button type="submit" className="nav-link">
                Logout
            </button>
        </Form>
    );
};

export default Logout;
