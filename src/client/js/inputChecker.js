// Checks if user input is valid
// regex part found on stackoverflow

function checkForInput(inputText) {
    const regexURL = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    const regex = new RegExp(regexURL)
    if(typeof inputText === "string" && inputText.length > 2 && (inputText.match(regex)) == null) {
        return true
    }else{
        return false
    }
}

export { checkForInput }
