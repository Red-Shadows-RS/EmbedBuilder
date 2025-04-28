// By nightcoreat

function copyJSON() {
    const output = document.getElementById('output').innerText;
    if (!output.trim()) {
        alert("There is no code to be copied. Please make sure that you have created the embed and pressed the generate button!");
        return;
    }

    navigator.clipboard.writeText(output).then(() => {
        alert("Done Copied!");
    }).catch((err) => {
        alert("Something error has been occurred while prepare your code to copy!");
        console.error(err);
    });
}