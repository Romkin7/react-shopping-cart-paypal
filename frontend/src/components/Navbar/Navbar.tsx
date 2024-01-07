import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store/store';
import Cart from '../../models/cart';
import SearchForm from '../SearchForm/SearchForm';
import Logout from '../Logout/Logout';

const Navbar: FC = () => {
    const cartFromState = useSelector((state: AppState) => state.cart);
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);
    const cart = new Cart(cartFromState);
    const { isAuthenticated, user } = loggedInUser;
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Shop
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    {`Cart ${cart.getTotalQuantity()} items`}
                                </Link>
                            </li>
                        </ul>
                        <SearchForm />
                        <ul className="navbar-nav me-end mb-2 mb-lg-0">
                            {!isAuthenticated ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">
                                            Sig Up
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to={`/profile/${user?._id}`}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Logout
                                            _id={
                                                loggedInUser?.user
                                                    ?._id as string
                                            }
                                        />
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
