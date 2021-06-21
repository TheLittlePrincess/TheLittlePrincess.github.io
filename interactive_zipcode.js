//GET POPULATION ENTERED
function getPopulation(){
  x_dashboard = [];
  var population = document.getElementById("population-input").value;
  if (population){
    x_dashboard.push(population);
  }
  //console.log("population", population);
 

  var households = document.getElementById("households-input").value;
  if (households){
    x_dashboard.push(households);
  }
  //console.log("households", x_dashboard)

  var median = document.getElementById("median-household-input").value;
  if (median){
    x_dashboard.push(median);
  }
  //console.log("median", median);

  var units = document.getElementById("total-housing-units-input").value;
  if (units){
    x_dashboard.push(units);
  }
  console.log(x_dashboard);

//DISPLAY OUTPUT

console.log("length", x_dashboard.length);
if (x_dashboard.length === 4){
  // Set result to var
  binned = score(x_dashboard);
  console.log("binned", binned);
  //DISPLAY OUTPUT
 

 //BINNING INTO LOW, MEDIUM, HIGH
 var indexOfMin = binned.indexOf(Math.min(...binned))
 if (indexOfMin == 0){ var outputToUser = "Your Area is a LOW Producer of Trash"};
 if (indexOfMin == 1){ var outputToUser = "Your Area is a MEDIUM Producer of Trash"};
 if (indexOfMin == 2){ var outputToUser = "Your Area is a HIGH Producer of Trash"};

document.getElementById("output").innerHTML = outputToUser;
  }
};


//EVENT LISTENER TO GET USER POPULATION INPUT 
document.getElementById("population-input").addEventListener("change", getPopulation);

document.getElementById("households-input").addEventListener("change", getPopulation);

document.getElementById("median-household-input").addEventListener("change", getPopulation);

document.getElementById("total-housing-units-input").addEventListener("change", getPopulation);