import  { FC } from 'react';
import  {BrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import ProductsPage from './pages/products';
import CartPage from './pages/cart';
import './App.scss';




const App: FC = () => {
    return ( 
        <BrowserRouter basename="/">
        <main className="mt "></main>
        <Routes>
            <Route path="/" index={true} element={<ProductsPage />} />
            <Route path="/" index={true} element={<CartPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;