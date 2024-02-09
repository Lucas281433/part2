const Countries = ({ filteringCountries, handlerSelect }) => {
  if (filteringCountries.length > 10) {
    return <div>Too many matches, specify anoter filter</div>;
  }

  if (filteringCountries.length < 10 && filteringCountries.length > 1) {
    return (
      <div>
        {filteringCountries.map((countries) => (
          <div key={countries.name.common}>
            {countries.name.common}
            {''} <button onClick={() => handlerSelect(countries.name.common)}>Show</button>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Countries;
