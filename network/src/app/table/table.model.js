import { commits } from './commits.data.js';

async function requestCommits() {
    // Same as `return commits;`.
    return await new Promise((resolve) => resolve(commits));
}


export class TableModel {
    getItems() {
        return requestCommits();
    }
}
