document.getElementById("visitor").innerHTML = "error"; 
 const response = fetch('https://h4j6pir80l.execute-api.us-east-1.amazonaws.com/REST'); 
 console.log(response.status);
 response.json().then((data) => {document.getElementById("visitor").innerHTML = data});
 console.log(data);



