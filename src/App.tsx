import React, { FC } from 'react';
import './App.scss';
import Cart from './pages/cart';
import ProductsPage from './pages/products';

const App: FC = () => {
    return (
        <main>
            <Cart />
            <ProductsPage />
        </main>
    );
};

export default App;
