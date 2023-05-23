document.getElementById("visitor").innerHTML = "error"; 

try{
  const response = fetch('https://cumuluscompendium.click/getVisitors')
   .then((response) => response.json())
   .then((data) => {document.getElementById("visitor").innerHTML = data});
  console.log(response.status);
  console.log(response.json());
  if (!response.ok){
    throw new Error("Network response was not OK");
  }
} catch (error){
  console.error("There has been a problem with your fetch operation:", error);
}


