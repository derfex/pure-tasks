import { initCommitsModule } from './src/app/commits/commits.module.js';
import { initUserModule } from './src/app/user/user.module.js';


export async function start() {
    const promises = [];
    promises.push(initCommitsModule(document.getElementById('commits-table')));
    promises.push(initUserModule(document.getElementById('user-container')));
    const results = await Promise.allSettled(promises);

    let i = -1;
    const limit = results.length;
    while (++i < limit) {
        if (results[i].status === 'rejected') {
            console.error(results[i].reason);
        }
    }
}
