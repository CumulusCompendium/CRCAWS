document.getElementById("visitor").innerHTML = "error"; 
 const response = fetch('https://9evvf0v893.execute-api.us-east-1.amazonaws.com/REST/getVisitors'); 
 console.log(response.status);
 response.json().then((data) => {document.getElementById("visitor").innerHTML = data});
 console.log(data);



