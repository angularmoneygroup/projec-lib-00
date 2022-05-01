export class CommonTableConfig {
  returnRowActionsConfig() {
    return {
      title: "",
      dataProperty: "ROW_ACTIONS",
      sortable: false,
      filterable: true,
      style: ['align-middle w-10px']
    }
  }
  returnNome() {
    return {
      title: "Nome",
      dataProperty: "",
      sortable: true,
      filterable: true,
      style: ['align-middle w-10px']
    }
  }
  returnCodigo() {
    return {
      title: "Codigo",
      dataProperty: "",
      sortable: true,
      filterable: true,
      style: ['align-middle w-10px']
    }
  }
  returnID() {
    return {
      title: "ID",
      dataProperty: "",
      sortable: true,
      filterable: true,
      style: ['align-middle w-10px']
    }
  }
}
