import Information from "../Global/Information";
import BorderCountry from "./BorderCountry";

const DetailCard = ({ country }) => {
  function getCurrencieName() {
    const key = Object.keys(country.currencies).at(0);
    return country.currencies[key].name;
  }

  function getLanguage() {
    const keys = Object.keys(country.languages);
    return keys
      .map((key) => {
        return country.languages[key];
      })
      .join(", ");
  }

  return (
    <div id="detail_container">
      <div id="image_detail">
        <img src={country.flags.svg} alt={"drapeau " + country.name.official} />
      </div>
      <div id="info_detail_container">
        <h2>{country.translations.fra.common}</h2>
        <div id="info_detail">
          <Information section="Native Name" valeur={country.name.official} />
          <Information section="Top Level Domaine" valeur={country.tld} />
          <Information
            section="Population"
            valeur={country.population.toLocaleString()}
          />
          <Information section="Currencies" valeur={country.currencies?getCurrencieName():'Pas de money'} />
          <Information section="Region" valeur={country.region} />
          <Information section="Language" valeur={country.languages?getLanguage():'Pas de langage'} />
          <Information section="Sub Region" valeur={country.subregion} />
          <Information section="Capital" valeur={country.capital?country.capital[0]:'Pas de capital'} />
        </div>
        <div id="border_country_countainer">
          <span>Border Country : </span>
          {country.borders != null ? ( 
          <div> {country.borders.map((border, index) => (
            <BorderCountry key={index} countryCode={border} />
          ))} </div >
          ) : (
            <p>Pas de pays à côté (Le pays est problablement une île)</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
