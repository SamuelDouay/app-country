import { useState } from "react";
import Country from "../components/Country/Country";
import FilterHome from "../components/Filter/FilterHome";

const Home = (svg) => {
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterSearch, setFilterSearch] = useState('');

  function handleRegionFilter(region) {
    setFilterRegion(region);
  }

  function handleSearchFilter(country) {
    setFilterSearch(country);
  }

  return (
    <section id="homePage">
      <FilterHome filterRegionFunction={handleRegionFilter} filterSearchFunction={handleSearchFilter} changeSvg={svg}/>
      <Country filterRegion={filterRegion} filterSearch={filterSearch}/>
    </section>
  );
};

export default Home;
