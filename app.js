const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("wind-speed");
const timezone = document.getElementById("timezone");
const time = document.getElementById("time");
const loading = document.getElementById("loading");

(function getWeather() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1"
  )
    .then((response) => response.json())
    .then((data) => {
      const current = data.current;
      const currentUnits = data.current_units;

      temperature.innerHTML =
        current.temperature_2m + currentUnits.temperature_2m;
      windSpeed.innerHTML =
        current.wind_speed_10m + currentUnits.wind_speed_10m;
      timezone.innerHTML = data.timezone;
      time.innerHTML = new Date(current.time).toLocaleString();
    })
    .finally(() => {
      loading.style.display = "none";
    });
})();
