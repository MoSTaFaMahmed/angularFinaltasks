import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';
import { LoginComponent } from './Components/login/login.component';
import { AddEditProductComponent } from './Components/add-edit-product/add-edit-product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthgurdGuard } from './Gurds/authgurd.guard';
import { RegisterComponent } from "./register/register.component"
import { Login2Component } from "./Components/login2/login2.component"
const routes: Routes = [
  {path: '', component:MainlayoutComponent, children:[
{path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Order',component:OrderMasterComponent,canActivate:[AuthgurdGuard]},
  {path:'Order/:id',component:ProductDetailsComponent},
  {path:'product-page/:mode/:id',component:AddEditProductComponent},
  {
    path: 'user',
    loadChildren: () => import('src/app/Components/user-moule/user-moule.module')
                          .then(modul=>modul.UserMouleModule)
  },
  ]},
  {path:'Login',component:LoginComponent},
  { path: "register", component: RegisterComponent },
  { path: "login", component: Login2Component },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
