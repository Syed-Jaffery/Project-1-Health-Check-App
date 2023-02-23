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

const ageValue = document.getElementById('ageValue');
const weightValue = document.getElementById('weightValue');
const heightValue = document.getElementById('heightValue');
const bmiBtn = document.getElementById('bmi-btn');

const bmiResult = document.getElementById('bmi-result');
const bmiCategory = document.getElementById('bmi-category');
const previousResult = document.getElementById('previous-result');

bmiBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let age = parseInt(ageValue.value);
  let weight = parseInt(weightValue.value);
  let height = parseInt(heightValue.value);

  const queryURL = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;

  fetch(queryURL, options)
    .then((response) => response.json())
    .then((json) => {
      let bmi = json.data.bmi;
      let health = json.data.health;

      bmiResult.innerHTML = bmi;
      bmiCategory.innerHTML = health;
    })
    .catch((err) => console.error(err));

  // previousResult.innerHTML = catergoryData;
});

// // clear button
// function clear() {
//   window.location.clear();
// }

const genderValue = document.getElementById('genderValue');
const ibwHeightValue = document.getElementById('ibwHeightValue');

weightBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let gender = genderValue.value;
  let ibwHeight = parseInt(ibwHeightValue.value);

  const queryURL = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${ibwHeight}`;

  fetch(queryURL, options)
    .then((response) => response.json())
    .then((json) => {
      let hamwiWeight = json.data.Hamwi;
      let devineWeight = json.data.Devine;
      let millerWeight = json.data.Miller;
      let robinsonWeight = json.data.Robinson;

      hamwi.innerHTML = hamwiWeight;
      devine.innerHTML = devineWeight;
      miller.innerHTML = millerWeight;
      robinson.innerHTML = robinsonWeight;
    })
    .catch((err) => console.error(err));
});
