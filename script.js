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
      output.innerHTML = `<p style="color:green;">Average temperature: ${data.weather[0].avgtempC} °C</p>
      <p>Feels like: ${data.current_condition[0].FeelsLikeC} °C</p>`;
    })
    .catch((error) => {
      output.innerHTML = `<p style="color:red;">An eror occured: ${error.message}</p>`;
    });
}

button.addEventListener("click", searchCity);
