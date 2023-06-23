import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() isLoading: boolean;

  constructor() { }

  getImageSrc(): string {
    return `assets/${this.product.imageSrc}`;

  }

  ngOnInit(): void {
  }
  onAddToCart(){
    this.addToCart.emit(this.product);


  }

}
