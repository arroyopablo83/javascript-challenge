console.log("Mr Chilito y Lord Cacahuate")

//Mensaje Amigable

let lugardeCambio = d3.select("#datetime")
let lugardeCambio2 = d3.select("#stars")

lugardeCambio.on("click", function(){
  
    lugardeCambio2.text("XQ CREES EN TONTERIAS!!!!!!!");
  
  });

let button = d3.select("#filter-btn");  
let form = d3.select("#datetime"); 

let button2 = d3.select("#city-filter-btn");  
let form2 = d3.select("#city-datetime"); 


// let filterFunctions = dates => {
//    return parseInt(dates.datetime) === inputValue
// }

let tbody = d3.select("#newRow");

data.forEach(obj => {
    //crear fila
    
    let tRow = tbody.append("tr");

    Object.entries(obj).forEach(([key, value]) => {
    //console.log(value)
    // se repite 7 veces
    let tData = tRow.append("td");
    tData.text(value)

    });
});






function runEnter(){
    
    tbody.html("");
    d3.event.preventDefault();
    

    let inputSelect = d3.select("#datetime");
    let inputValue = inputSelect.property("value");
  
    console.log(inputValue)
    
    let filteredData = data.filter(d => d.datetime == inputValue )

    console.log(filteredData)

    // return inputValue;

    filteredData.forEach(obj => {
        //crear fila
        
        let tRow = tbody.append("tr");
    
        Object.entries(obj).forEach(([key, value]) => {
        //console.log(value)
        // se repite 7 veces
        let tData = tRow.append("td");
        tData.text(value)
    
        });
    });

}
 
 button.on("click", runEnter);
 form.on("submit", runEnter);


 function runEnter2(){
    
    tbody.html("");
    d3.event.preventDefault();
    

    let inputSelect = d3.select("#city-datetime");
    let inputValue = inputSelect.property("value");
  
    console.log(inputValue)
    
    let filteredData = data.filter(d => d.city == inputValue )

    console.log(filteredData)

    // return inputValue;

    filteredData.forEach(obj => {
        //crear fila
        
        let tRow = tbody.append("tr");
    
        Object.entries(obj).forEach(([key, value]) => {
        //console.log(value)
        // se repite 7 veces
        let tData = tRow.append("td");
        tData.text(value)
    
        });
    });

}
 
 button2.on("click", runEnter2);
 form2.on("submit", runEnter2);