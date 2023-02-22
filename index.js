// Get the button:
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '90f5491a77msh4f438d805de16cdp1a5061jsn0fe1b96543a8',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
  },
};

// let ageValue = document.getElementById('age').value;
// let weightValue = document.getElementById('weight').value;
// let heightValue = document.getElementById('height').value;

let ageValue = 30;
let weightValue = 100;
let heightValue = 180;
let queryURL = `https://fitness-calculator.p.rapidapi.com/bmi?age=${ageValue}&weight=${weightValue}&height=${heightValue}`;

fetch(queryURL, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// clear button
function clear() {
  window.location.clear();
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '90f5491a77msh4f438d805de16cdp1a5061jsn0fe1b96543a8',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
  },
};

let gender = 'male';
let height = 180;
let queryUrl = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${height}`;

fetch(queryUrl, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
