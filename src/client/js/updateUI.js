const updateUI = async() => {
    const request = await fetch('/sentiment')
    try {
        document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
    }catch(error) {
        console.log("Error during updateUI!", error)
    }
}

export { updateUI }