import {Cart, CartProduct} from '../../models/cart.model';
import * as CartActions from '../actions/cart.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const initialState: Cart =  {
        products: [],
        total: 0,

};

// tslint:disable-next-line:variable-name
const _cartReducer = createReducer(initialState,
    on(CartActions.addProduct, (state, {product}) => {

        const newProducts = state.products.map(item => ({ ...item }));

        const findIndex = state.products.findIndex(item => item.id === product.id);
        if (findIndex !== -1) {
            console.log('unouno');
            newProducts[findIndex].quantity += 1;
        } else {
            const toAdd: CartProduct = {
                id: product.id,
                name: product.name,
                imageSrc: product.imageSrc,
                price: product.price,
                quantity: 1,
            };
            console.log('due');

            newProducts.push(toAdd);
            console.log('tre');

        }
        return {
            ...state,
            total: state.total + product.price,
            products: newProducts,
            };
        }),
    on(CartActions.removeProduct, (state, {name}) => {

        let newProducts = state.products.map(item => ({ ...item }));

        const findIndex = state.products.findIndex(item => item.name === name);
        let price = 0;
        if (findIndex !== -1) {
            price = newProducts[findIndex].price ;
            const quantity = newProducts[findIndex].quantity;
            if (quantity === 1 ) {
                newProducts = newProducts.filter(item => item.name !== name);
            }
            else if (quantity > 1) {
                newProducts[findIndex].quantity -= 1;
            }

        }
        return {
            ...state,
            total: state.total - price,
            products: newProducts,
        };
    })
    );

export function cartReducer(state: Cart| undefined, action: Action){
    return _cartReducer(state, action);
}
