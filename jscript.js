document.getElementById("visitor").innerHTML = "error"; 
 const response = fetch('https://yipgnwj47f.execute-api.us-east-1.amazonaws.com/Prod/path') 
 .then((response => response.json()));
 console.log(response);
 //.then((data) => {document.getElementById("visitor").innerHTML = data});
