function handleSubmit(event) {
    event.preventDefault()

    /*
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)
    */

    /*
    console.log("::: Form Submitted :::")
    */

    /*
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    */

    /*
    let reqBody = {
        theText: formText
    };
    fetch('/testing', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity
        console.log(res);
        alert(dataText);
    })
    */

    var urlInput = document.querySelectorAll('input[name=test-url]')

    if(Client.validURL(JSON.parse(JSON.stringify(urlInput[0].value))))
    {
        console.log("::: FORM VALIDATION IS DONE :::")
        
        console.log(" BUILDING... ");
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: urlInput[0].value})
        })
        .then(res => res.json())
        .then(function(res) { 
            document.querySelector('section.url-results #score_tag').innerHTML = res.score_tag
            document.querySelector('section.url-results #confidence').innerHTML = res.confidence
            document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
            document.querySelector('section.url-results #irony').innerHTML = res.irony
            document.querySelector('section.url-results #agreement').innerHTML = res.agreement
        })

    }else{
        var error_section = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "Invalid URL"      
    } 
}

export { handleSubmit }
