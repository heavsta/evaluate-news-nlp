const postRequest = async (url='', userInput = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput) //body data type must match "Content-Type" header
    })
    try {
        const sentiment = await res.json();
        return sentiment;
    }
    catch(error) {
        console.log('postRequest error!', error);
    }
}

export { postRequest }