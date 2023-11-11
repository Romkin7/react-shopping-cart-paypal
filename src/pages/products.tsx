import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import fetchProducts from './api/products';
import { setProducts } from '../store/actions/productActions';
import IProduct from '../@types/product';


const ProductsPage: FC = () => {
    const products = useSelector((state: AppState) => state.products);
    const dispatch = useDispatch();
    // const setProductsFunction = useCallback(() => {
    //     return dispatch(setProducts(products));
    // }, [dispatch, products]);

    useEffect(() => {
        fetchProducts().then((data) => {
            console.log(data)
            return dispatch(setProducts(data.products))
        });
    }, [dispatch]);
    return (
        <section>
            <h1>Products:</h1>
            {products.length ? (<ul>{products.map((product: IProduct) => {
                return (
                    <li key={product.id}>{`${product.title} $${product.price}`}</li>
                )
            } )}</ul>) : (<h2>Loading Products...</h2>)}
        </section>
    );
};

export default ProductsPage;
