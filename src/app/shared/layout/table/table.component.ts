import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { DataTableType } from 'src/app/core/Models/table-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  @Input()
  public tableConfig?: DataTableType;

  @Input()
  public tableContent?: any[];

  @Input()
  public component: any;

  @Output()
  public startRowAction = new EventEmitter<{}>();

  @ViewChild('details', {read: ViewContainerRef})
  private details: ViewContainerRef | undefined;

  public pageList: number[] | undefined;

  columnsSize = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.tableConfig && this.tableConfig.columns) {
      this.columnsSize = this.tableConfig.columns.length;
    }
  }

  public onRowActionClicked(actionType: string, rowData: any): void {
    const userAction = {
      actionToPerform: actionType,
      rowData
    };

    this.startRowAction.emit(userAction);
  }
}
