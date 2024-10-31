//Get Table Location
//Fetch data
//For each, add tr data on the table


fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(paintings => {
    const tableElement = document.getElementById("paintings");
    paintings.forEach(painting => {
      const rowElement  = document.createElement("tr");
      const nameCell = document.createElement('td');
      nameCell.textContent = painting.name;
      rowElement.appendChild(nameCell);
      const yearCell = document.createElement('td');
      yearCell.textContent = painting.year;
      rowElement.appendChild(yearCell);
      const artistCell = document.createElement('td');
      artistCell.textContent = painting.artist;
      rowElement.appendChild(artistCell);
      tableElement.appendChild(rowElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  })