import IProduct from "../../@types/product";
import AppActions from "./actionTypes/actions";
import { SET_PRODUCTS } from "./actionTypes/productActionTypes";


export function setProducts(products: IProduct[]): AppActions {
    return {
        type: SET_PRODUCTS,
        products,
    };
}