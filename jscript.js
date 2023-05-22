  fetch('https://bnqm19oa07.execute-api.us-east-1.amazonaws.com/default')
.then((response => response.json()))
.then((data) => {document.getElementById("visitor").innerHTML = data})

