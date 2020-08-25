import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { CrudTableFilterComponent } from './crud-table-filter/crud-table-filter.component';
import { CrudTablePaginatorComponent } from './crud-table-paginator/crud-table-paginator.component';
import { CrudService } from './crud.service';

@NgModule({
  declarations: [
    CrudTableComponent,
    CrudTableFilterComponent,
    CrudTablePaginatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    CrudTableComponent,
    CrudTableFilterComponent,
    CrudTablePaginatorComponent,
  ],
  providers: [CrudService],
})
export class CrudTableModule {}
