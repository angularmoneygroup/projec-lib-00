import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-lib-00';

  menu = [
    {
      id: 1,
      menu: 'Pagina Inicial',
      rota: '/home'
    },
    {
      id: 2,
      menu: 'Formulario',
      rota: '/form'
    },
    {
      id: 3,
      menu: 'Tabela',
      rota: '/table'
    },
  ]
}
