export class TableController {
    constructor(tableModel, tableView) {
        this.tableModel = tableModel;
        this.tableView = tableView;
    }

    async init() {
        const items = await this.tableModel.getItems();
        this.tableView.render(items);
    }
}
