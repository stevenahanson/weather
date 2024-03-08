import { useState, useEffect } from 'react';

export default function WeatherData() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=51.50&lon=0.1276&appid=b702075565a4c9a7726c9729a95cbb59`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        const temperatureInCelsius = Math.round(data.list[0].main.temp - 273.15); 
        const currentCity = data.city.name;
        const currentCountry = data.city.country;
        const weatherDescription = data.list[0].weather[0].description;

        setWeather({
          city: currentCity,
          country: currentCountry,
          description: weatherDescription,
          temperature: temperatureInCelsius,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading };
}