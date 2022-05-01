import { Component, Input, OnInit } from '@angular/core';
import { DataTableType } from 'src/app/core/Models/table-interface';
import { tableConfig } from 'src/app/core/Models/tableConfig';

@Component({
  selector: 'app-table-child',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.scss']
})
export class TableChildComponent implements OnInit {


  @Input()
  tableContent?: any;
  @Input()
  tableConfig?: DataTableType;

  constructor() { }

  ngOnInit() {
    this.tableConfig = tableConfig;
  }

  executeAction(action: any, column: any){
}
}
