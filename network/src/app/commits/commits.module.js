import { addCSSToDOM } from '../shared/utilities.js';

import { TableModel } from '../shared/table/table.model.js';
import { TableView } from '../shared/table/table.view.js';
import { TableController } from '../shared/table/table.controller.js';

const pathToTableStyle = 'src/app/shared/table/table.css';


export async function initCommitsModule(element) {
    addCSSToDOM(pathToTableStyle);

    const model = new TableModel();
    const view = new TableView(element);
    const controller = new TableController(model, view);
    await controller.init();
}
