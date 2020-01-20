async function requestCommits() {
    const url = 'https://api.github.com/repos/derfex/pure-tasks/commits';
    const response = await fetch(url);
    return await response.json();
}


export class TableModel {
    constructor(source) {
        this.source = source;
    }

    getItems() {
        return requestCommits()
    }
}
