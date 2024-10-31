document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const table = document.getElementById("formdata")

  formData.forEach((val, key) => {
    const tr = document.createElement("tr");

    const tdKey = document.createElement("td");
    const tdValue = document.createElement("td");

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(val);

    tdKey.appendChild(keyText);
    tdValue.appendChild(valueText);

    tr.appendChild(tdKey);
    tr.appendChild(tdValue);

    table.appendChild(tr);
  });
})