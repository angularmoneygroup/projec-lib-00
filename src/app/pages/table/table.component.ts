import { PoatransportesService } from './../../core/service/apiTeste/poatransportes.service';
import { Component, OnInit } from '@angular/core';
import { DataTableType } from 'src/app/core/Models/table-interface';
import { tableConfig } from 'src/app/core/Models/tableConfig';

@Component({
  selector: 'app-page-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class PageTableComponent implements OnInit {

  tableContent: any;
  tableConfig?: DataTableType;
  linhas: any
  colunas: any

  constructor(private poatransportesService: PoatransportesService) { }

  ngOnInit() {
    this.getAllTeste()
  }

  getAllTeste() {
    this.poatransportesService.getAll().subscribe(res =>{
      this.tableContent = res
      this.linha(res)
    }
      )
  }

  linha(param: any){
    console.log(param)
    this.colunas = [{
      id: "ID",
      codigo: "Código",
      nome: "Nome"
    }]
    this.linhas = param
  }
}
