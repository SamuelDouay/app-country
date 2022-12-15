import { useState, useEffect } from "react";
import Resources from "../../resources/Resources";
import Button from "../Global/Button";

const BorderCountry = ({ countryCode }) => {
  const [code, setCode] = useState([]);

  useEffect(() => {
    new Resources("/alpha")
      .getOne(countryCode)
      .then((res) => setCode(res.data));
  }, [countryCode]);

  return (
    code.map((country) => <Button
    type="button"
    value={country.translations.fra.common}
    chemin={"/detail/" + country.name.common}
  />)
    
  );
};

export default BorderCountry;
