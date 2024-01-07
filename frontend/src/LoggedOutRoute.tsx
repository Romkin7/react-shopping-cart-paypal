import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ILoggedOutRouteProps {
    isAuthenticated: boolean;
}

const LoggedOutRoute: FC<ILoggedOutRouteProps> = ({ isAuthenticated }) => {
    const location = useLocation();
    if (!isAuthenticated) {
        return <Outlet />;
    }

    return <Navigate to={location.state} replace />;
};

export default LoggedOutRoute;
