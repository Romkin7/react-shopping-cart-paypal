import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ILoggedOutRouteProps {
    isAuthenticated: boolean;
    userId: string;
}

const LoggedOutRoute: FC<ILoggedOutRouteProps> = ({
    isAuthenticated,
    userId,
}) => {
    if (!isAuthenticated) {
        return <Outlet />;
    }

    return <Navigate to={`/profile/${userId}`} replace={true} />;
};

export default LoggedOutRoute;
