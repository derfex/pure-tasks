async function requestCommits() {
    const url = 'https://api.github.com/repos/derfex/pure-tasks/commits';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return await response.json();
}


export class TableModel {
    getItems() {
        return requestCommits();
    }
}
