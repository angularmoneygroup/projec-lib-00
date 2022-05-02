import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './routing.module';
import { PageTableComponent } from './table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PageTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [PageTableComponent]
})
export class TableModule { }
