document.getElementById("visitor").innerHTML = "error"; 

try{
  const response = fetch('https://cumuluscompendium.click/getVisitors');
   if (response.ok){ 
     console.log(response.status);
    response.json().then((data) => {document.getElementById("visitor").innerHTML = data});
     console.log(data);
  catch (error){
  console.error("There has been a problem with your fetch operation:", error);
}


