import { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ filteringCountries }) => {
  const [weatherCity, setWeatherCity] = useState("");
  const country = filteringCountries[0];
  const api_key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    if (filteringCountries.length === 1) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
        )
        .then((response) => setWeatherCity(response.data));
    }
  }, [filteringCountries, api_key]);

  if (filteringCountries.length === 1) {
    const flag = country.flags.png;
    const icon = weatherCity && weatherCity.weather[0].icon;
    const codeIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={flag} width="250" />
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {weatherCity && weatherCity.main.temp} Celcius</p>
        <img src={codeIcon} alt="" width="250" />
        <p>Wind: {weatherCity && weatherCity.wind.speed} m/s</p>
      </div>
    );
  }
};

export default Country;
