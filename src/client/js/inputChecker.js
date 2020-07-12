//checks if the url is valid
//regex method found on stackoverflow

function checkForInput(inputText) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    const regex = new RegExp(expression)
    if(inputText.match(regex) || typeof inputText === "string" && inputText.length > 2 && isNaN(inputText)) {
        return true
    } else {
        return false;
    }
}

export { checkForInput }