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


export async function initUserModule(element) {
    const userText = await requestUser();
    const userElement = createSpan(userText);
    const avatarBLOB = await requestAvatar();
    const avatarElement = createImage(avatarBLOB);

    element.append(avatarElement);
    element.append(userElement);
}
