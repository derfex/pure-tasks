import { initCommitsModule } from './src/app/commits/commits.module.js';
import { initUserModule } from './src/app/user/user.module.js';


export async function start() {
    await initCommitsModule(document.getElementById('commits-table'));
    await initUserModule(document.getElementById('user-container'));
}
