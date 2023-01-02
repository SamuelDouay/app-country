import Information from "../Global/Information";

const CountryCard = ({ country }) => {
  return (
    <div className="country_card">
      <div className="image_country_card">
        <img src={country.flags.svg} alt={"drapeau " + country.name.official} />
      </div>
      <div className="infos_country_card">
        <h2>{country.translations.fra.common}</h2>
        <div className="info_country">
          <Information section="Population" valeur={country.population.toLocaleString()} />
          <Information section="Region" valeur={country.region} />
          <Information section="Capital" valeur={country.capital?country.capital[0]:'Pas de capital'} />
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
