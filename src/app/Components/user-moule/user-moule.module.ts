import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthgurdGuard } from 'src/app/Gurds/authgurd.guard';

const routes: Routes =[
   {path:'', redirectTo: '/user/UserProfile', pathMatch:'full'},
  {path:'UserProfile', component: UserProfileComponent,canActivate:[AuthgurdGuard]},
  {path: 'EditProfile', component:EditUserProfileComponent,canActivate:[AuthgurdGuard]}
]
@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserMouleModule { }
