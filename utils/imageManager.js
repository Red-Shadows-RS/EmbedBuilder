// By nightcoreat

function getImage() {
    const imageInput = document.getElementById('imageInput');
    const url = imageInput.value.trim();

    if (!url) return null;

    return { url };
}