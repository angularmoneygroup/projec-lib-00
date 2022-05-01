import { CommonTableConfig } from "./table-commoum-config";

const commonConfig = new CommonTableConfig()

export const tableConfig = {
  columns: [
    commonConfig.returnID(),
    commonConfig.returnCodigo(),
    commonConfig.returnNome(),
  ],
  rowActions: [],
  rowsPerPage: 2
};
