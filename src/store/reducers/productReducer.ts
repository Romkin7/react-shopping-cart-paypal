import IProduct from "../../@types/product";
import ProductActionTypes, { SET_PRODUCTS } from "../actions/actionTypes/productActionTypes";


const DEFAULT_STATE: IProduct[] = [];
const productReducer = (state = DEFAULT_STATE, action: ProductActionTypes) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.products;
        default:
            return state;
    }
};

export default productReducer;