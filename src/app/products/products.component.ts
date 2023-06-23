import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addProduct} from '../store/actions/cart.actions';
// @ts-ignore

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading: boolean;

  constructor(private store: Store<{products: Product[]}>) {
    this.products$ = this.store.pipe(select('products'));
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  onAddToCart(product: Product){
    this.isLoading = true;
    setTimeout(() => {
      this.store.dispatch(addProduct({product}));
      this.isLoading = false;
      }, 2000);
  }
}
