import { Routes } from '@angular/router';
import { PedidoPageComponent } from './views/pedido-page/pedido-page.component';
import { CategoryPageComponent } from './views/category-page/category-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { DetailPageComponent } from './views/detail-page/detail-page.component';


export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'categoria', component: CategoryPageComponent },
  { path: 'pedido', component: PedidoPageComponent },
  { path: 'produto/:categoryName', component: ProductPageComponent },
  { path: 'detalhes/:name', component: DetailPageComponent }
];
