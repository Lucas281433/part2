import { useEffect, useState } from "react";
import countriesService from "./services/countries";
import Country from "./components/Country";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToFind, setCountriesToFind] = useState("");

  useEffect(() => {
    countriesService.getAll().then((returnedContries) => {
      setCountries(returnedContries);
    });
  }, []);

  const handleChange = (event) => {
    setCountriesToFind(event.target.value);
  };

  const filteringCountries = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(countriesToFind.toLowerCase())
  );

  const handlerSelect = (selectedCountry) => {
    setCountriesToFind(selectedCountry)
}

  return (
    <div>
      Find Coutries <input onChange={handleChange} />
      <Countries filteringCountries={filteringCountries} handlerSelect={handlerSelect} />
      <Country filteringCountries={filteringCountries} />
    </div>
  );
};

export default App;
