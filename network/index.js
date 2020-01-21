import { TableModel } from './src/app/table/table.model.js';
import { TableView } from './src/app/table/table.view.js';
import { TableController } from './src/app/table/table.controller.js';

const pathToTableStyle = 'src/app/table/table.css';

function addCSSToDOM(url) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = url;
    document.head.appendChild(style);
}

export async function start() {
    addCSSToDOM(pathToTableStyle);

    const model = new TableModel();
    const element = document.getElementById('commits-table');
    const view = new TableView(element);
    const controller = new TableController(model, view);
    await controller.init();
}
