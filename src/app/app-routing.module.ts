import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateProductComponent } from './pages/page-create-product/page-create-product.component';
import { PageListProductComponent } from './pages/page-list-product/page-list-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component:WelcomeComponent},
  { path: 'sign-up', component:SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'create-product', component:PageCreateProductComponent},
  {path:'list-product', component:PageListProductComponent},
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
