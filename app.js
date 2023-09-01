let apiKey = "Your API Key of openweather API";

let cityName = document.querySelector(".input_city");
let btn = document.querySelector(".check_city");
let header = document.querySelector(".appName");
let backgroundimage = document.querySelector(".image");
let navbar = document.querySelector(".nav");
let body = document.querySelector("body");
let info = document.querySelector(".overlay-text");

backgroundimage.style.backgroundImage = `url('assets/main2.jpg')`;
btn.addEventListener("click", async () => {
  const city = cityName.value;
  console.log("city : ", city);
  let Weather = await getWeather(city);
  console.log(Weather);
  let id = Weather.weather[0].id;

  if (id == 800) {
    backgroundimage.style.backgroundImage = `url('assets/clear.jpg')`;
    navbar.style.background =
      "linear-gradient(121.7deg,rgb(84, 51, 255), rgb(32, 189, 255), rgb(165, 254, 203))";
    body.style.background = "#87CEEB";
    btn.style.background = "white";
    btn.style.color = "black";
    cityName.style.background = "white";
    cityName.style.color = "black";
  } else if (id >= 801 && id <= 805) {
    backgroundimage.style.backgroundImage = `url('assets/clouds.jpg')`;
    navbar.style.background =
      "linear-gradient(90deg, rgba(63,59,59,0.7904411764705882) 0%, rgba(82,70,70,0.7764355742296919) 50%, rgba(97,103,112,0.3618697478991597) 100%)";
    navbar.style.boxShadow = "0 7px 7px #616770";
    cityName.style.boxShadow = "0 7px 7px #616770";
    cityName.style.background = "#3f3b3b";
    cityName.style.color = "white";
    btn.style.boxShadow = "0 7px 7px #616770";
    btn.style.background = "#3f3b3b";
    btn.style.color = "white";
    body.style.background = "#AFBCBF";
  } else if (id >= 701 && id <= 781) {
    backgroundimage.style.backgroundImage = `url('assets/atmosphere.jpg')`;
    navbar.style.background =
      "linear-gradient(90.5deg, rgb(35, 210, 255) 0.3%, rgb(74, 104, 247) 18.2%, rgb(133, 80, 255) 36.4%, rgb(198, 59, 243) 52.5%, rgb(250, 84, 118) 68.8%, rgb(255, 223, 67) 99.9%)";
    body.style.background = "#6495ED";
    btn.style.background = "white";
    btn.style.color = "black";
    cityName.style.background = "white";
    cityName.style.color = "black";
  } else if (id >= 600 && id <= 622) {
    backgroundimage.style.backgroundImage = `url('assets/snow.jpg')`;
    navbar.style.background =
      "linear-gradient(90deg, rgb(148, 241, 246) 0%, rgb(148, 189, 246) 100.7%)";
    body.style.background = "#15f4ee";
    btn.style.background = "white";
    header.style.color = "black";
  } else if (id >= 500 && id <= 531) {
    backgroundimage.style.backgroundImage = `url('assets/rain.jpg')`;
    navbar.style.background =
      "linear-gradient(90deg, rgb(55, 209, 255) 0%, rgb(14, 31, 111) 100.2%)";
    body.style.background = "#4D4DFF";
    btn.style.color = "white";
    info.style.color = "white";
  } else if (id >= 300 && id <= 321) {
    backgroundimage.style.backgroundImage = `url('assets/drizzle.jpg')`;
    navbar.style.background =
      "linear-gradient(91.3deg, rgb(135, 174, 220) 1.5%, rgb(255, 255, 255) 100.3%)";
    body.style.background = "#99FFFF";
    btn.style.color = "white";
  } else if (id >= 200 && id <= 232) {
    backgroundimage.style.backgroundImage = `url('assets/thunder.jpg')`;
    navbar.style.background =
      "linear-gradient(90deg, rgb(55, 209, 255) 0%, rgb(14, 31, 111) 100.2%)";
    body.style.background = "#0000CD";
    btn.style.color = "white";
  } else {
    alert("City not found");
  }

  show(Weather);
});

function show(Weather) {
  let city = cityName.value;
  header.innerText = `${city}'s Weather`;
  let tempearture = document.querySelector(".temperature");
  let degree = "o";
  tempearture.innerText = `Temperature : ${Weather.main.temp} \u00B0C\n Sky : ${Weather.weather[0].description}`;
}

async function getWeather(city) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let res = await axios.get(url);
    return res.data;
  } catch (e) {
    alert("City Not Found!!! Try Again");
  }
}
// Completed