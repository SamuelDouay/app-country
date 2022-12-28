import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { NavLink } from "react-router-dom";
import Resources from "../../resources/Resources";

const Country = ({ filterRegion, filterSearch }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    new Resources("/all").getAll().then((res) => setData(res.data));
  }, []);

  function filterByRegion(country) {
    return country.region === filterRegion || filterRegion === 'all';
  }

  function sortOrdreAlphabetique(countryA, countryB) {
    return countryA.translations.fra.common.localeCompare(countryB.translations.fra.common)
  }

  function filterBySearch(country) {
    return toNormalForm(country.translations.fra.common.toLowerCase()).includes(toNormalForm(filterSearch.toLowerCase()))
  }

  function toNormalForm(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

  return (
    <div id="countries_container">
      {data
        .filter((country) => filterByRegion(country))
        .filter((country) => filterBySearch(country))
        .sort((a,b) => sortOrdreAlphabetique(a,b))
        .map((country, index) => (
          <NavLink key={index} to={"/detail/" + country.name.common}>
            {" "}
            <CountryCard country={country} />{" "}
          </NavLink>
        ))}
    </div>
  );
};

export default Country;
