d3.json('./static/data.json').then((data) => {
  //console.log(data);
tableData = data
console.log(tableData);


//global declaration of tbody, since it will be accessed in and out of functions
tbody = d3.select("tbody")




  function createZipCodeDropDown() {
  zipSelector = d3.select("#zip-select"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR

  d3.json('./static/zip_code_list.json').then((zipOptions) => { //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
      zipOptions.forEach((zip) => { //LOOP THROUGH PARTNER LIST TO CREATE INITAL DROP DOWN
          zipSelector
          .append('option')
          .text(zip)
          .property('Value', zip);
      })
  })
}; //END OF createZipCodeDropDown()

createZipCodeDropDown();



});


//START OF FUNCTION TO FILTER DATA//
function multipleWellSelected() {
  //select the zip-select <select>
  let options = document.getElementById('zip-select').selectedOptions;
  //make the zip code selected into an array
  let values = Array.from(options).map(({ value }) => value);
  console.log(values)

  let filteredData = tableData;
  var requestedData = [];
  console.log(filteredData);
  values.forEach((zipcode) => {
      filteredData.forEach((row) => {
        {if (zipcode == row[0]){requestedData.push(row)}}
      })
  })
console.log(requestedData);


tbody.html("");
requestedData.forEach((well) => {
  let row = tbody.append("tr");
  Object.values(well).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
     })
 })

};
  
 
//END OF multipleWellSelected()

// LISTENER TO ACTIVATE FILTER, ALLOWS FOR SINGLW OR MULTI WELL FILTERING ON CHANGE
d3.selectAll('#zip-select').on("change", multipleWellSelected);
