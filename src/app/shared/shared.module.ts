import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './layout/menu/menu.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './layout/table/table.component';
import { TabelaAninhadaComponent } from './layout/tabela-aninhada/tabela-aninhada.component';

@NgModule({
  declarations: [
    MenuComponent,
    TabelaAninhadaComponent,
    TabelaAninhadaComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    TabelaAninhadaComponent,
    TableComponent
  ]
})
export class SharedModule { }
