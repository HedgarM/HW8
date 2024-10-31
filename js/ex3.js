const username = "Hedgar";

const countriesVisited = [
    { name: "USA", year: 2004 },
    { name: "Mexico", year: 2008 }
];

const data = {
  name: username,
  countries: countriesVisited
};

fetch('https://thejsway-server.herokuapp.com/api/countries', {
  method: 'POST',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response =>{
  return response.text();
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.error(err.message);
})