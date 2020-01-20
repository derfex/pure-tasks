export class TableView {

    constructor(element) {
        this.element = element;
    }

    composeTR(item) {

    }

    render(viewModel) {
        const rows = ''
        this.element.innerHTML = '<table><tbody>' + rows + '</tbody></table>'
    }
}
