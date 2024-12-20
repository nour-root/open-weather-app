// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherByCountry(country) {
  const url = `${BASE_URL}?q=${country}&appid=${
    import.meta.env.VITE_ACCESS_KEY
  }&units=metric`; // 'units=metric' for Celsius
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return Object.values(data)[0];
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

// Example usage
export default getWeatherByCountry;
