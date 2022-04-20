let input = document.querySelector(".search");
let mainContainer = document.querySelector(".main-i");
let form = document.querySelector(".form");
let container = document.querySelector(".main-content");

form.addEventListener("submit", (e) => {
  mainContainer.innerHTML = "";
  e.preventDefault();
  let inputVal = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=33dedde6287575d237be2e1c44271762`
  )
    .then((res) => res.json())
    .then((data) => {
      weatherUpdate(data);
      sunMoonChange(data);
    });
});

let imgs = [
  "../../img/sun.png",
  "../../img/moon.png",
  "../../img/rain.png",
  "../../img/snow.png",
];

let sunBox = ["<i class='bx bx-sun' ></i>","<i class='bx bxs-moon'></i>", "<i class='bx bx-cloud-light-rain'></i>", "<i class='bx bx-cloud-snow' ></i>"]

function weatherUpdate(data) {
  mainContainer.innerHTML += `
  <div class="main-inform">
  <h3>${data.country}, ${data.name}</h3>
  <h3>${data.main.temp.toFixed(0)} ℃</h3>
  <div class="sunny-flex">
    <h3>${data.weather[0].description} </h3>
    <i class='bx bx-sun'></i>
  </div>

  <div class="humidity">
    <h3>Humidity: <span class="humid">${data.main.humidity} %</span> </h3>
    <h3>Wind Speed: <span class="wind-speed">${data.wind.speed} km/h</span></h3>
  </div>
</div>
  `;
}

let divImg = document.querySelector(".div-img");
let sun1 = document.querySelector(".sun");
let sunIcon = document.querySelector(".sun-icon");
let sunBoxHTML = document.querySelector(".sun-small-box");
console.log(sunIcon);
function sunMoonChange(data) {
  if (data.weather[0].description == "broken clouds") {
    sun1.classList.add('sun-hide');
    divImg.innerHTML = `
      <img class='img-all' src="${imgs[1]}" alt="img">
      `;
    container.style.backgroundImage = 'linear-gradient(-125deg, #712B75, rgba(255, 255, 255, 0.491))'
  } else if (data.weather[0].description == "few clouds") {
    divImg.innerHTML = `
      <img class='img-all' src="${imgs[1]}" alt="img">
      `;
    container.style.backgroundImage = 'linear-gradient(-125deg, #712B75, rgba(255, 255, 255, 0.491))'
    sunIcon.classList.add('sun-hide')
  } else if (data.weather[0].description == "overcast clouds") {
    divImg.innerHTML = `
      <img class='img-all' src="${imgs[3]}" alt="img">
      `;
      container.style.backgroundImage = 'linear-gradient(-125deg, #6BA7CC, rgba(255, 255, 255, 0.491))'
      sunIcon.classList.add('sun-hide')
    
  } else if (data.weather[0].description == "clear sky") {
    divImg.innerHTML = `
      <img class='img-all' src="${imgs[0]}" alt="img">
      
      `;
      container.style.backgroundImage = 'linear-gradient(-125deg, #77d3fd, rgba(255, 255, 255, 0.491))'
  } else if (data.weather[0].description == "scattered clouds") {
    divImg.innerHTML = `
      <img class='img-all' src="${imgs[3]}" alt="img">
      `;
    container.style.backgroundImage = 'linear-gradient(-125deg, #6BA7CC, rgba(255, 255, 255, 0.491))'
    sunIcon.classList.add('sun-hide')
    
    
  } else if (data.weather[0].description == "moderate rain") {
    divImg.innerHTML = `
      <img class='img-all' src="${imgs[2]}" alt="img">
      `;
    container.style.backgroundImage = 'linear-gradient(-125deg, #A8AAC4, rgba(255, 255, 255, 0.491))'
    sunIcon.classList.add('sun-hide')
    
    
  }
}
