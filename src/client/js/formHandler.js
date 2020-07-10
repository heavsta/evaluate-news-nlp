function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value

    
    if(Client.checkForInput(formText)) {
        console.log("::: Form Submitted :::")
    let validInput = { text: formText }

    //API CALL Sentiment
    Client.postRequest('http://localhost:8081/sentiment', validInput)

    //Update UI
    .then( res=>{
        updateUI(res)
    })
    } else {
        alert('Please make sure that your URL is valid, or that your message is longer than 2 characters')
    }
}

const updateUI = async(res) => {
    try {
        document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
    } catch(error) {
        console.log("update UI error!", error)
    }
}

export { handleSubmit }
