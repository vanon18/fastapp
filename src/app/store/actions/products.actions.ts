import {createAction, props} from '@ngrx/store';
import {Product} from '../../models/product.model';

const PRODUCT_ACTION = {
    BEGIN_GET_PRODUCTS: '[PRODUCTS] BEGIN GET PRODUTS',
    SUCCESS_GET_PRODUCTS: '[PRODUCTS] SUCCESS GET PRODUCTS',
    ERROR_GET_PRODUCTS: '[PRODUCTS] ERROR GET PRODUCTS'
};

export const beginGetProducts = createAction(PRODUCT_ACTION.BEGIN_GET_PRODUCTS);
export const successGetProducts = createAction(PRODUCT_ACTION.SUCCESS_GET_PRODUCTS, props<{ results: Product[]}>());
export const errorGetProduct = createAction(PRODUCT_ACTION.ERROR_GET_PRODUCTS, props<{error: Error}>());
