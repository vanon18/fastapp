import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartComponent } from './cart/cart.component';
import {cartReducer} from "./store/reducers/cart.reducer";
import {productsReducer} from "./store/reducers/products.reducer";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      cart: cartReducer,
      products: productsReducer,

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
