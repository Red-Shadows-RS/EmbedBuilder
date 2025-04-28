// By nightcoreat

function getThumbnail() {
    const thumbnailInput = document.getElementById('thumbnailInput');
    const url = thumbnailInput.value.trim();

    if (!url) return null;

    return { url };
}