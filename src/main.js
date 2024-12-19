import dataResponse from "./components/dataReport";
import errorMessage from "./components/errorMessage";
import loaderIcon from "./components/loader";
import startScreen from "./components/startScreen";
import accessGeoLocationAPI from "./service/accessGeoLocationAPI.service";
import fetchOpenWeatherDataByCoords from "./service/fetchOpenWeatherDataByCoords.service";

const container = document.getElementById("root");

const handleFetchData = (data = { latitude: 0, longitude: 0 }) => {
  container.innerHTML = loaderIcon();
  fetchOpenWeatherDataByCoords(data)
    .then(async (res) => {
      const data = await res.json();

      container.innerHTML = dataResponse(
        data.weather[0].icon,
        data.main.temp,
        data.weather[0].description,
        `${data.name}, ${data.sys.country}`,
        data.main.feels_like,
        data.main.humidity
      );
      document.getElementById("return").addEventListener("click", () => {
        init();
      });
    })
    .catch((err) => {
      container.innerHTML = errorMessage(err.message);
      document.getElementById("retry").addEventListener("click", () => {
        init();
      });
    });
};

const init = () => {
  container.innerHTML = startScreen();
  const useLocationBtn = document.getElementById("use-location");
  const cityInput = document.getElementById("city");
  const handleSearch = document.getElementById("use-search");

  handleSearch.addEventListener("click", () => {
    console.log(cityInput.value);
  });

  useLocationBtn.addEventListener("click", () => {
    accessGeoLocationAPI()
      .then((data) => {
        console.log(data);
        handleFetchData(data);
      })
      .catch((err) => {
        if ("message" in err) {
          container.innerHTML = errorMessage(err.message);
          document.getElementById("retry").addEventListener("click", () => {
            init();
          });
        }
        console.log(err);
      });
  });
};

init();
