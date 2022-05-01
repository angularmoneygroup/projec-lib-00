export interface RowAction {
  label: string;
  actionIdToReturn: string;
  logoImageUrl: string;
}

export interface Column {
  title: string;
  dataProperty: string;
  sortable: boolean;
  filterable: boolean;
  style: string[];
}

export interface DataTableType {
  columns: Column[];
  rowActions: RowAction[];
  rowsPerPage: number;
}
