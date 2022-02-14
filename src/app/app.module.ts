import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { EgyptianNationalPipe } from './Pipes/egyptian-national.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddEditProductComponent } from './Components/add-edit-product/add-edit-product.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { RegisterComponent } from './register/register.component';
import { Login2Component } from './Components/login2/login2.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SidebarComponent,
    ProductCardDirective,
    EgyptianNationalPipe,
    CreditCardPipe,
    OrderMasterComponent,
    HomeComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    AddEditProductComponent,
    LoginComponent,
    DialogExampleComponent,
    RegisterComponent,
    Login2Component,
    LogoutComponent,
    MainlayoutComponent

  ],
  entryComponents:[DialogExampleComponent,DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
