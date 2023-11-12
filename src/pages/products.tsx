import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import fetchProducts from './api/products';
import { setProducts } from '../store/actions/productActions';
import IProduct from '../@types/product';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage: FC = () => {
    const products = useSelector((state: AppState) => state.products);
    const dispatch = useDispatch();
    // const setProductsFunction = useCallback(() => {
    //     return dispatch(setProducts(products));
    // }, [dispatch, products]);

    useEffect(() => {
        fetchProducts().then((data) => {
            console.log(data);
            return dispatch(setProducts(data.products));
        });
    }, [dispatch]);
    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <h1>Products:</h1>
                </div>

                {products.length ? (
                    <div className="row d-flex justify-content-between">
                        {products.map((product: IProduct) => {
                            return (
                                <div key={product.id} className="col-md-4">
                                    <ProductCard
                                        image={{
                                            alt: product.title,
                                            title: `${product.title} ${product.brand}`,
                                            src: product.thumbnail,
                                        }}
                                        brand={product.brand}
                                        price={product.price}
                                        title={product.title}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="row text-center">
                        <h2>Loading Products...</h2>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsPage;
