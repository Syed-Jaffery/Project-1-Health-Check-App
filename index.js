const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '90f5491a77msh4f438d805de16cdp1a5061jsn0fe1b96543a8',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
  },
};

fetch(
  'https://fitness-calculator.p.rapidapi.com/bmi?age=25&weight=65&height=180',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

  /bmi?age=ageValue&weight=weightValue&height=heightValue