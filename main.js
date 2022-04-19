let input = document.querySelector(".search");
let mainContainer = document.querySelector(".main-content");
let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  mainContainer.innerHTML= ''
  e.preventDefault();
    let inputVal = input.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=33dedde6287575d237be2e1c44271762`
    )
      .then((res) => res.json())
      .then((data) => {
        mainContainer.innerHTML = `
      <div class="search-div">
      <input type="search" class="search" placeholder="Search">
      <i class='bx bx-search-alt-2'></i>
    </div>

    <div class="main-inform">
      <h3>Uzbekistan, ${data.name}</h3>
      <h3>${data.main.temp.toFixed(0)} ℃</h3>
      <div class="sunny-flex">
        <h3>${data.weather[0].description} </h3>
        <i class='bx bx-sun'></i>
      </div>

      <div class="humidity">
        <h3>Humidity: <span class="humid">${data.main.humidity} %</span> </h3>
        <h3>Wind Speed: <span class="wind-speed">${
          data.wind.speed
        } km/h</span> </h3>
      </div>
    </div>
      `;
      });
});
