import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: AccountComponent },
  { path: 'register', component: RegisterComponent },
];

const newRoutes: Routes = [
  {
    path: '',

    children: [
      { path: 'login', component: AccountComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(newRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
