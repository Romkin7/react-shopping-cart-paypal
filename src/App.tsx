import React, { FC } from 'react';
import './App.scss';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Cart from './pages/cart';
import ProductsPage from './pages/products';

const router = createBrowserRouter([
    {
        path : '/',
        element: '/ProductsPage'
    },
    {
        path: '/cart',
        element: '/CartPage'
    }
])

const App: FC = () => {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
};

export default App;
