import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './routing.module';
import { TableChildComponent } from './table-child/table-child.component';
import { PageTableComponent } from './table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TableChildComponent, PageTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [TableChildComponent, PageTableComponent]
})
export class TableModule { }
