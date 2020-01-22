import { initCommitsModule } from './src/app/commits/commits.module.js';


export async function start() {
    await initCommitsModule(document.getElementById('commits-table'));
}
