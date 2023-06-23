import {Cart, CartProduct} from '../../models/cart.model';
import * as CartActions from '../actions/cart.actions';
import {Action, createReducer, on} from '@ngrx/store';
import {Product} from '../../models/product.model';
// @ts-ignore
import {products} from '../../../data.json';
import * as ProductActions from '../actions/products.actions';

export type ProductState = {
    products: Product[],
    error: boolean,
};
export const initialState: ProductState = {
    products,
    error: false,
};

// tslint:disable-next-line:variable-name
const _productReducer = createReducer(initialState,
    on(ProductActions.beginGetProducts, state => state),
    on(ProductActions.successGetProducts, (state , { results }) => {
            return {
                ...state,
                products: results,
            };
        }),
    on(ProductActions.errorGetProduct, (state, {error: Error}) => {
        return {
            ...state,
            error: true,
        };
    })
);
export function productsReducer(state: ProductState | undefined, action: Action){
    return _productReducer(state, action);
}
