import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { setFlashMessage } from './store/actions/flashMessageActions';
import { AppState } from './store/store';

interface IProtectedRouteProps {
    isAuthenticated: boolean;
    redirectPath?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({
    isAuthenticated,
    redirectPath = '/login',
}) => {
    const dispatch = useDispatch();
    const flashMessage = useSelector((state: AppState) => state.flashMessage);
    if (!isAuthenticated) {
        if (!flashMessage.isVisible) {
            dispatch(
                setFlashMessage({
                    text: 'Please, log in again!',
                    variant: 'warning',
                    isVisible: true,
                }),
            );
        }
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
