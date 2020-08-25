import { AuthModule } from './../auth/auth.module';
import { MaterialModule } from './../material/material.module';
import { CrudTableModule } from './../crud-table/crud-table.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    AdminBooksComponent,
    AdminUsersComponent,
    AdminNavigationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CrudTableModule,
    MaterialModule,
    AuthModule,
  ],
  exports: [
    AdminDashboardComponent,
    AdminComponent,
    AdminBooksComponent,
    AdminUsersComponent,
    AdminNavigationComponent,
  ],
})
export class AdminModule {}
