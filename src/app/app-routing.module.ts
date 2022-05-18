import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageCreateProductComponent } from './pages/page-create-product/page-create-product.component';
import { PageListProductComponent } from './pages/page-list-product/page-list-product.component';
import { PageListUpdateProductComponent } from './pages/page-list-update-product/page-list-update-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageUpdateProductComponent } from './pages/page-update-product/page-update-product.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: PageListProductComponent},
  { path: 'sign-up', component:SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'create-product', canActivate: [AuthGuard], component:PageCreateProductComponent},
  {path:'list-product', component:PageListProductComponent},
  {path:'list-update-product', component:PageListUpdateProductComponent},
  { path: 'update-product/:id-product', canActivate: [AuthGuard], component: PageUpdateProductComponent },
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
