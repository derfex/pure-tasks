import { TableModel } from './table/table.model.js';
import { TableView } from './table/table.view.js';
import { TableController } from './table/table.controller.js';

function addCSSToDOM(url) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = url;
    document.head.appendChild(style);
}

export async function start() {
    addCSSToDOM('table/table.css');

    const model = new TableModel();
    const element = document.getElementById('commits-table');
    const view = new TableView(element);
    const controller = new TableController(model, view);
    await controller.init();
}
