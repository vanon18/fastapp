import { Component, OnInit } from '@angular/core';
import {Cart, CartProduct} from '../models/cart.model';
import {Observable} from "rxjs";
import {select, Store} from '@ngrx/store';
import {removeProduct} from '../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart$: Observable<Cart>;
  constructor(private store: Store<{cart: Cart}>) {
    this.cart$ = store.pipe(select('cart'));
  }
  ngOnInit(): void {
  }
  getImageSrc(product: CartProduct): string {
    return `assets/${product.imageSrc}`;
}

  onRemoveItem(product: CartProduct){
    this.store.dispatch(removeProduct( {name: product.name}));
  }

}
