
let cityInput = document.querySelector('input');
let weatherImg = document.querySelector('.weather img');
let temprature = document.querySelector('.temp');
let loc= document.querySelector('.city');
let humidityPer = document.querySelector('.humidityValue');
let windSpeed = document.querySelector('.windValue');

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "4d4221c3b70cdeda6a6d387673639b65";

const checkWeather = async ()=>{
    const response  = await fetch(apiUrl + cityInput.value + `&appid=${apiKey}`);
    let data = await response.json();

   loc.innerHTML = data.name;
   temprature.innerHTML = Math.round(data.main .temp)  + "°C";
   humidityPer.innerHTML = data.main.humidity + "%";
   windSpeed.innerHTML = data.wind.speed + "Km/h";
   console.log(data);

   weatherImg.src = `/images/${data.weather[0].main.toLowerCase()}.png`;
   
}




