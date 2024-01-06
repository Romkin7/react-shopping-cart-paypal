import { FC } from 'react';
import { AppState } from '../store/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProfilePage: FC = () => {
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);

    return (
        <section>
            {!loggedInUser.isAuthenticated && (
                <Navigate to="/login" replace={true} />
            )}
            <div className="container">
                <div className="row text-center">
                    <h1>Profile</h1>
                    <h4>Details</h4>
                    <p>Email: {loggedInUser.user?.email}</p>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
