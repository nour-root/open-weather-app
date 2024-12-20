const fetchOpenWeatherDataByCoords = (data = { lon: 0, lat: 0 }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${
      data.lon
    }&appid=${import.meta.env.VITE_ACCESS_KEY}&units=metric`
  );
};

export default fetchOpenWeatherDataByCoords;
