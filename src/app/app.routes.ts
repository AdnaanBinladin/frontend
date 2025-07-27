import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Inventory } from './pages/inventory/inventory';
import { Settings } from './pages/settings/settings';
import { ProductDetail } from './pages/product-detail/product-detail' ;
import { login } from './pages/login/login';
import { splash } from './pages/splash/splash';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' }, 
  { path: 'splash', component: splash, data: { showNav: false, title: 'Splash' } },
  { path: 'login', component: login, data: { showNav: false, title: 'Login' } },
  { path: 'dashboard', component: Dashboard, data: { showNav: true, title: 'Dashboard' } },
  { path: 'inventory', component: Inventory, data: { showNav: true, title: 'Inventory' } },
  { path: 'settings', component: Settings, data: { showNav: true, title: 'Settings' } },
{ path: 'product-detail/:id', component: ProductDetail, data: { showNav: false, title: 'Product Details' } }
];
