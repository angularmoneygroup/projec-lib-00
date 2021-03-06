import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
