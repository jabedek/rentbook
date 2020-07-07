import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/Input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/Card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/Table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
