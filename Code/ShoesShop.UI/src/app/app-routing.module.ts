import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AuthGuard } from './modules/auth-guard';
import { CanLeaveEditGuardService } from './services/can-leave-edit-guard.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'product',
  canActivate: [AuthGuard],
    children: [
      {path:'',component: ProductComponent},
      {path: 'editproduct/:id', component: EditProductComponent, canDeactivate: [CanLeaveEditGuardService]}
    ],
  },
  {path:'addProduct',component: AddProductComponent, canDeactivate: [CanLeaveEditGuardService]},
  {path:'contact',component: ContactComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent, canDeactivate: [CanLeaveEditGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   {
//     path: 'customer',
//     loadChildren: () =>
//       import('./customer-m/customer-m.module').then((m) => m.CustomerMModule),
//     canLoad: [AuthGuard],
//   },
//   {
//     path: 'hero',
//     loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
