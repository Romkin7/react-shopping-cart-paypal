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
import FlashMessage from './components/FlashMessage/FlashMessage';

const App: FC = () => {
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);
    const flashMessage = useSelector((state: AppState) => state.flashMessage);
    return (
        <BrowserRouter basename="/">
            <Navbar />
            <main className="mt-5">
                <aside className="py-4">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-6">
                                {flashMessage.isVisible && (
                                    <FlashMessage
                                        variant={flashMessage.variant}
                                    >
                                        {flashMessage.text}
                                    </FlashMessage>
                                )}
                            </div>
                        </div>
                    </div>
                </aside>
                <Routes>
                    <Route path="/" index={true} element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/order-confirmation/:orderId"
                        element={<OrderConfirmationPage />}
                    />
                    <Route
                        element={
                            <LoggedOutRoute
                                userId={loggedInUser?.user?._id as string}
                                isAuthenticated={loggedInUser.isAuthenticated}
                            />
                        }
                    >
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                    <Route
                        element={
                            <ProtectedRoute
                                isAuthenticated={loggedInUser.isAuthenticated}
                            />
                        }
                    >
                        <Route path="/profile/:id" element={<ProfilePage />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
