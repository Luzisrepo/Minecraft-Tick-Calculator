function calculate() {
  var seconds = Number(document.getElementById('seconds').value) || 0;
  var minutes = Number(document.getElementById('minutes').value) || 0;
  var hours = Number(document.getElementById('hours').value) || 0;
  var days = Number(document.getElementById('days').value) || 0;
  var years = Number(document.getElementById('years').value) || 0;

  var outputNumber1 = 
    seconds * 20 +
    minutes * 60 * 20 +
    hours * 60 * 60 * 20 +
    days * 60 * 60 * 24 * 20 +
    years * 60 * 60 * 24 * 365 * 20;

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
