function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const value = parseInt(inputField.value);
    inputField.value = "";

    return value;
}

function setTextById(inputId, value) {
    const textElement = document.getElementById(inputId);
    textElement.innerText = value;
}
