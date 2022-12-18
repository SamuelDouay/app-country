import Button from "../Global/Button";

const FilterHome = ({filterRegionFunction, filterSearchFunction}) => {

    function handleChangeRegion(event) {
        filterRegionFunction(event.target.value);
    }

    function handleChangeSearch(recherche) {
        filterSearchFunction(recherche);
    }


    return (
        <div id="header_componant">
            <div id="searchContainer">
                <Button type='text' placeholder={'Search for a country'} filterSearchValue={handleChangeSearch}/>
            </div>
            <div id="filterCountry">
                <select name="country" id="country_select" onChange={handleChangeRegion}>
                    <option className="region_filter" value="all">All continents</option>
                    <option className="region_filter" value="Africa">Africa</option>
                    <option className="region_filter" value="Americas">America</option>
                    <option className="region_filter" value="Asia">Asia</option>
                    <option className="region_filter" value="Europe">Europa</option>
                    <option className="region_filter" value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );

};

export default FilterHome;