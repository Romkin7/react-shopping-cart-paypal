import { FC, useEffect } from 'react';
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
            return dispatch(setProducts(data.products));
        });
    }, [dispatch]);

    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <h1>Shop</h1>
                </div>
                {products.length ? (
                    <div className="row d-flex justify-content-start my-4">
                        {products.map((product: IProduct) => {
                            return (
                                <div key={product.id} className="col-md-3 mb-4">
                                    <ProductCard product={product} />
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
