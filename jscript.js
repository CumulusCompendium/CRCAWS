document.getElementById("visitor").innerHTML = "error"; 
 const response = fetch('https://yipgnwj47f.execute-api.us-east-1.amazonaws.com/Prod/path') 
 .then((response) => response.json())
 .then((data) => {document.getElementById("visitor").innerHTML = data});
