import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/products';
import CartPage from './pages/cart';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

const App: FC = () => {
    return (
        <BrowserRouter basename="/">
            <Navbar />
            <main className="mt-5">
            <Routes>
                <Route path="/" index={true} element={<ProductsPage />} />
                <Route path="/cart" index={true} element={<CartPage />} />
            </Routes>
            </main>
           
        </BrowserRouter>
    );
};

export default App;
