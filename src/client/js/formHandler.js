function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('text').value;
    Client.checkForName(formText); //will replace with checkForInput in the future

    console.log("::: Form Submitted :::");
    let validInput = { text: formText };

    //API CALL Sentiment
    Client.postRequest('http://localhost:8081/sentiment', validInput)

    //Update UI
    .then( (res) => {
        document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
    });
}

export { handleSubmit }
