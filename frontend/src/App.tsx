import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/products';
import CartPage from './pages/cart';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import OrderConfirmationPage from './pages/orderConfirmation';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';
import { AppState } from './store/store';
import LoggedOutRoute from './LoggedOutRoute';

const App: FC = () => {
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);
    return (
        <BrowserRouter basename="/">
            <Navbar />
            <main className="mt-5">
                <Routes>
                    <Route path="/" index={true} element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/order-confirmation/:orderId"
                        element={<OrderConfirmationPage />}
                    />
                    <Route
                        element={
                            <ProtectedRoute
                                isAuthenticated={loggedInUser.isAuthenticated}
                            />
                        }
                    >
                        <Route path="/profile/:id" element={<ProfilePage />} />
                    </Route>
                    <Route
                        element={
                            <LoggedOutRoute
                                isAuthenticated={loggedInUser.isAuthenticated}
                            />
                        }
                    >
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
