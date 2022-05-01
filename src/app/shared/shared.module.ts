import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './layout/menu/menu.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './layout/table/table.component';

@NgModule({
  declarations: [
    MenuComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    TableComponent
  ]
})
export class SharedModule { }
