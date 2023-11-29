import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store/store';
import Cart from '../../models/cart';
import SearchForm from '../SearchForm/SearchForm';

const Navbar: FC = () => {
    const cartFromState = useSelector((state: AppState) => state.cart);
    const cart = new Cart(cartFromState);
    return (
        <header>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid d-flex justify-content-start">
                    <Link className="navbar-brand" to="/">
                        Products
                    </Link>
                    <Link className="navbar-brand" to="/cart">
                        {`Cart ${cart.getTotalQuantity()} items`}
                    </Link>
                    <SearchForm />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;