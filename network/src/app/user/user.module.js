// region # User
async function requestUser() {
    const url = 'https://api.github.com/users/derfex';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return await response.text();
}

function createSpan(text) {
    if (text.length > 64) {
        text = text.slice(0, 63) + '…';
    }
    const span = document.createElement('span');
    span.textContent = text;
    return span;
}

// endregion # User

// region # Avatar
async function requestAvatar() {
    const url = 'https://avatars1.githubusercontent.com/u/20978398?v=4';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return await response.blob();
}

function createImage(blob) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    return img;
}

// endregion # Avatar

function appendResult(element, result) {
    if (result.status === 'fulfilled') {
        element.append(result.value);
    } else {
        throw new Error(result.reason);
    }
}


export async function initUserModule(element) {
    const promises = [];
    promises.push(
        requestAvatar()
            .then(avatarBLOB => createImage(avatarBLOB)),
    );
    promises.push(
        requestUser()
            .then(userText => createSpan(userText)),
    );
    const results = await Promise.allSettled(promises);
    results.forEach(result => appendResult(element, result));
}
