document.getElementById("visitor").innerHTML = "error"; 
 const response = fetch('https://cumuluscompendium.click/getVisitors'); 
 console.log(response.status);
 response.json().then((data) => {document.getElementById("visitor").innerHTML = data});
 console.log(data);



