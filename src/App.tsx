import { FC } from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './pages/products';
import CartPage from './pages/cart';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductsPage />,
    },
    {
        path: '/cart',
        element: <CartPage />,
    },
]);

const App: FC = () => {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
};

export default App;
