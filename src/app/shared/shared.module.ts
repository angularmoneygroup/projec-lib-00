import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './layout/menu/menu.component';
import { FormComponent } from './layout/form/form.component';



@NgModule({
  declarations: [
    MenuComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
