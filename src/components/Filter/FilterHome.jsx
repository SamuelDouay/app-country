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
                <Button type='text' placeholder={'Rechercher un pays'} filterSearchValue={handleChangeSearch}/>
            </div>
            <div id="filterCountry">
                <select name="country" id="country_select" onChange={handleChangeRegion}>
                    <option className="region_filter" value="all">Tous les pays</option>
                    <option className="region_filter" value="Africa">Afrique</option>
                    <option className="region_filter" value="Americas">Amérique</option>
                    <option className="region_filter" value="Asia">Asie</option>
                    <option className="region_filter" value="Europe">Europe</option>
                    <option className="region_filter" value="Oceania">Oceanie</option>
                </select>
            </div>
        </div>
    );

};

export default FilterHome;