import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProtectedRouteProps {
    isAuthenticated: boolean;
    redirectPath?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({
    isAuthenticated,
    redirectPath = '/login',
}) => {
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
