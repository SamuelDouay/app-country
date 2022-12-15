import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/Details/DetailCard";
import FilterDetail from "../components/Filter/FilterDetail";
import Resources from "../resources/Resources";

const Detail = () => {
  let { slug } = useParams();
  const [country, setCountry] = useState([]);
  
  useEffect(() => {
    new Resources('/name').getOne(slug).then((res) => setCountry(res.data));
  }, [slug]);

  return (
    <section id="detailPage">
      <FilterDetail/>
      {country.map((country) => (
        <DetailCard country={country} />
      ))}
    </section>
  );
};

export default Detail;
