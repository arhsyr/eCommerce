import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemService } from './services/item.service';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';


const routes: Routes = [
  { path: 'cart-details', component: CartDetailsComponent},
  { path: 'items', component: ItemListComponent},
  { path: 'items/:id', component: DetailsComponent},
  { path: 'search/:keyword', component: ItemListComponent},
  { path: 'category/:id', component: ItemListComponent},
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  { path: '**', redirectTo: '/items', pathMatch: 'full'}
]


@NgModule({ 
  declarations: [
    AppComponent,
    ItemListComponent,
    CategoryComponent,
    SearchComponent,
    DetailsComponent,
    CartStatusComponent,
    MenuComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
