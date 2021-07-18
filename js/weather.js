const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
API_KEY = "1d9f026427dfd8f981c660e5f8e2ec86";

function getPosOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${(data.main.temp).toFixed(1)}℃`;
    });
}

function getPosFail() {
    alert("Fail to get position");
}

navigator.geolocation.getCurrentPosition(getPosOK, getPosFail)
