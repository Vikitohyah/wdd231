import { setupFooterAndHeader } from "./modules.js";
setupFooterAndHeader();

// Weather From Openweather
const myDesc = document.querySelector('#desc');
const myTemp = document.querySelector('#temp');
const myHumid = document.querySelector('#humidity');
const myHigh = document.querySelector('#high');
const myLow = document.querySelector('#low');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');
const myIcon = document.querySelector('#icon');


const myKey = '5186aa426b61ec0be8d65c5c4603cbbd';
const myLat = "6.5244";
const myLong = "3.3792";
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function fetchApi() {
  try {
    const response = await fetch(myUrl);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const description = data.weather[0].description;
      const capitalizedDesc = description.charAt(0).toUpperCase() + description.slice(1);

      myTemp.innerHTML = `<strong>${Math.round(data.main.temp)}° F</strong>`;
      myDesc.textContent = capitalizedDesc;
      myHumid.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
      myHigh.textContent = `High: ${Math.round(data.main.temp_max)}°`;
      myLow.textContent = `Low: ${Math.round(data.main.temp_min)}°`;
      mySunrise.textContent = `Sunrise: ${formatTime(data.sys.sunrise)}`;
      mySunset.textContent = `Sunset: ${formatTime(data.sys.sunset)}`;
      const myIcon = document.querySelector('#icon')
      const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      myIcon.setAttribute('SRC', iconsrc)
      myIcon.setAttribute('alt', data.weather[0].description)

    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error)
  }
}

fetchApi();

function formatTime(unixTime) {
  const date = new Date(unixTime * 1000);
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // makes it AM/PM format
  });
}

// Forcast From Openweather
const myForcastKey = "42c55903292799109fd233858129d102";
const myForcastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myForcastKey}&units=imperial`;

async function fetchForcastApi() {
  try {
    const response = await fetch(myForcastUrl);

    if (response.ok) {
      const data = await response.json();
      console.log(data);

    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    const forecastContainer = document.querySelector('.forecast-container')

    forecastContainer.innerHTML = ""; 

    dailyForecasts.forEach(day => {
      const date = new Date(day.dt * 1000);
      const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
      const temp = Math.round(day.main.temp);
      const desc = day.weather[0].description;

      // Create a simple card
      const forecastCard = document.createElement("div");
      forecastCard.className = "forecast-card";
      forecastCard.innerHTML = `
        <p>${weekday}: <strong>${temp}°F</strong></p>
      `;
      forecastContainer.appendChild(forecastCard);
    });


    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error)
  }
}

fetchForcastApi();

// Our Members Filtered
async function loadSpotlights() {
  const res = await fetch("data/members.json");
  const data = await res.json();
  const eligible = data.members.filter(m => m.level === 2 || m.level === 3);
  const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

  const goldContainer = document.querySelector(".gold-cards");
  const silverContainer = document.querySelector(".silver-cards");

  selected.forEach(member => {
    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <h4>${member.name}</h4>
      <img src="${member.image}" alt="${member.name}" class="member-logo" width="100" height="100" loading="lazy">
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    `;

    if (member.level === 3) {
      goldContainer.appendChild(card);
    } else if (member.level === 2) {
      silverContainer.appendChild(card);
    }
  });
}

loadSpotlights();