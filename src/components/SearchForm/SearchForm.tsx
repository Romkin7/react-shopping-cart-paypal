import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import fetchProducts from '../../pages/api/products';
import { setProducts } from '../../store/actions/productActions';
import Button from '../Button/Button';

const SearchForm: FC = () => {
    const [searchInput, setSearchInput] = useState<string>(() => '');
    const [searchParams, setSearchParams] = useSearchParams({});
    const location = useLocation();
    const dispatch = useDispatch();
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
        <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
                type="search"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onInput={updateSearchInput}
                value={searchInput}
                id="search"
            />
            <Button
                size="s"
                variant="primary"
                type="submit"
                borderRadius="rounded"
            >
                Search
            </Button>
        </form>
    );
};

export default SearchForm;
