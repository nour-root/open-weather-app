async function getWeatherByCountry(country) {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${
			import.meta.env.VITE_ACCESS_KEY
		}&units=metric`
	);
}

// Example usage
export default getWeatherByCountry;
