document.getElementById("visitor").innerHTML = "error"; 

try{
  const response = fetch('https://cumuluscompendium.click/getVisitors');
   if (response.ok){ 
    .then((response) => response.json())
    .then((data) => {document.getElementById("visitor").innerHTML = data});
     console.log(data);
  else (!response.ok){
    console.log("Network response was not OK");
  }
   catch (error){
  console.error("There has been a problem with your fetch operation:", error);
}


