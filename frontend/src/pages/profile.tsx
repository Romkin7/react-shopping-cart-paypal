import { FC } from 'react';
import { AppState } from '../store/store';
import { useSelector } from 'react-redux';

const ProfilePage: FC = () => {
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);

    return (
        <section>
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
