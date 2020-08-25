import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [RegisterComponent, UserCardComponent, AccountComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, MaterialModule],
  exports: [RegisterComponent, AccountComponent],
})
export class AuthModule {}
