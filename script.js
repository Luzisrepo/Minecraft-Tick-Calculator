function calculate() {
  var outputNumber1 = document.getElementById('seconds').value *(20) + 

document.getElementById('seconds').value * 20 +      
document.getElementById('minutes').value *(60 * 20) + 
document.getElementById('hours').value *(60 * 60 * 20) + 
document.getElementById('days').value *(60 * 60 * 24 * 20) + 
document.getElementById('years').value *(60 * 60 * 24 * 365 * 20);

document.getElementById('output1').value = parseInt(outputNumber1);
}

function myFunction() {
  
    document.getElementById('seconds').value = "";
    document.getElementById('minutes').value = ""; 
    document.getElementById('hours').value = ""; 
    document.getElementById('days').value = ""; 
    document.getElementById('years').value = "";
    document.getElementById('output1').value = "";
}