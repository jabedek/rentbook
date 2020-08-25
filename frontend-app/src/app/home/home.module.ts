import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
