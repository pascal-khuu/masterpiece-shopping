import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageCreateProductComponent } from './pages/page-create-product/page-create-product.component';
import { PageListProductComponent } from './pages/page-list-product/page-list-product.component';
import { PageUpdateProductComponent } from './pages/page-update-product/page-update-product.component';
import { PageListUpdateDeleteProductComponent } from './pages/page-list-update-delete-product/page-list-update-delete-product.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpComponent,
    WelcomeComponent,
    SignInComponent,
    PageNotFoundComponent,
    PageCreateProductComponent,
    PageListProductComponent,
    PageUpdateProductComponent,
    PageListUpdateDeleteProductComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
