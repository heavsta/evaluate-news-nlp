import { response } from "express"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value
    if(Client.inputChecker(formText)) {
        let validInput = {text: formText}

        // api call
        const postData = async (url='https://localhost:8081/sentiment', validInput) => {
            console.log(validInput)
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(validInput) //body data type must match "Content-Type" header
            })
            try {
                const sentiment = await response.json()
                return sentiment
            }catch(error) {
                console.log("error", error)
            }
        }

        // update UI
        updateUI(response)

    }else {
        alert('Please enter a correct text')
    }
}


export { handleSubmit }
