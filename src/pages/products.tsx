import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';
import { AppState } from '../store/store';
import fetchProducts from './api/products';
import { setProducts } from '../store/actions/productActions';
import IProduct from '../@types/product';
import ProductCard from '../components/ProductCard/ProductCard';
import Button from '../components/Button/Button';

const ProductsPage: FC = () => {
    const [searchInput, setSearchInput] = useState<string>(() => '');
    const [searchParams, setSearchParams] = useSearchParams({});
    const products = useSelector((state: AppState) => state.products);
    const dispatch = useDispatch();
    const location = useLocation();
    // const setProductsFunction = useCallback(() => {
    //     return dispatch(setProducts(products));
    // }, [dispatch, products]);

    useEffect(() => {
        fetchProducts().then((data) => {
            return dispatch(setProducts(data.products));
        });
    }, [dispatch]);

    const updateSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        location.search = searchParams.get('search') as string;
        setSearchParams({ query: event.target.value });
        setSearchInput((previousState: string) =>
            event.target.value !== previousState
                ? event.target.value
                : previousState,
        );
    };
    const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchValue = formData.get('search');
        fetchProducts(`?q=${searchValue}`).then((data) => {
            return dispatch(setProducts(data.products));
        });
    };
    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <form onSubmit={handleSearch}>
                        <input
                            name="search"
                            onInput={updateSearchInput}
                            value={searchInput}
                            id="search"
                            type="search"
                        />
                        <Button size="s" variant="primary" type="submit">
                            Search
                        </Button>
                    </form>
                </div>
                {products.length ? (
                    <div className="row d-flex justify-content-start my-4">
                        {products.map((product: IProduct) => {
                            return (
                                <div key={product.id} className="col-md-3 mb-4">
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
