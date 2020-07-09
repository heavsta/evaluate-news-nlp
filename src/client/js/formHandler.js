function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value

    console.log("::: Form Submitted :::")
    let validInput = { text: formText }

    //API CALL Sentiment
    Client.postRequest('http://localhost:8081/sentiment', validInput)

    //Update UI
    .then( updateUI())
}

const updateUI = async() => {
    const req = await fetch ('/sentiment')
    try {
        const sentiment = await req.json()
        document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
    } catch(error) {
        console.log("update UI error!", error)
    }
}

export { handleSubmit }
