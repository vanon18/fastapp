import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products$: Observable<Product[]>;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() isLoading: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(product: Product){
    this.addToCart.emit(product);
  }

}
