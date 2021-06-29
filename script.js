// api url
const api_url = 
      "https://api.finna.fi/v1/search?lookfor&filter[]=~format:"0/Book/"&limit=10";

  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Title</th>
          <th>Name</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.title} </td>
    <td>${r.name}</td>
           
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("records").innerHTML = tab;
}
