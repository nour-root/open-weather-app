const fetchOpenWeatherDataByCoords = (data = { latitude: 0, longitude: 0 }) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${
			data.longitude
		}&appid=${import.meta.env.VITE_ACCESS_KEY}&units=metric`
	);
};

export default fetchOpenWeatherDataByCoords;
