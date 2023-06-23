import {createAction, props} from '@ngrx/store';
import {Product} from '../../models/product.model';

const CART_ACTION = {
    ADD: '[CART] ADD PRODUCT',
    REMOVE: '[CART] REMOVE PRODUCT'
};

export const addProduct = createAction(
    CART_ACTION.ADD,
    props<{ product: Product }>()
    );
export const removeProduct = createAction(
    CART_ACTION.REMOVE,
    props<{ name: string }>()
);
