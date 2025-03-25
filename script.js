const output = document.getElementById("output");
button = document.getElementById("searchButton");
function searchCity() {
  const input = document.getElementById("userInput").value;
  console.log(input);
  fetch(`https://wttr.in/${input}?format=j1`)
    //fetch(`https://wttr.in/${input}`)-> Seite gesehen direct mit der URL auf dem Browser
    .then((res) => res.json())
    //.then((res) => res.text())-> formatiert als text
    .then((data) => {
      console.log(data);
      output.innerHTML = `<h2>${data.weather[0].avgtempC}${data.current_condition.FeelsLikeC}</h2>`;
    });
}

button.addEventListener("click", searchCity);
