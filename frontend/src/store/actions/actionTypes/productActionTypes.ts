import IProduct from '../../../@types/product';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export interface SetProducts {
    type: typeof SET_PRODUCTS;
    products: IProduct[];
}

type ProductActionTypes = SetProducts;
export default ProductActionTypes;
