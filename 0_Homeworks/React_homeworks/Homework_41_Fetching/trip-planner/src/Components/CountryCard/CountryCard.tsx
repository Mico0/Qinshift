import "./CountryCard.css";
import type { Country } from "../../models/country.model";

interface CountryCardProps {
  country: Country;
  className: string;
}

function CountryCard({ country, className }: CountryCardProps) {
  return (
    <div className={className}>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>
        <b>{country.name.common}</b>
      </h2>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <p>
        <b>Area:</b> {country.area} km<sup>2</sup>
      </p>
      <p>
        <b>Population:</b> {country.population}
      </p>

      {country.landlocked ? (
        <p className="mb-4">
          <b>{country.name.common}</b> is a landlocked country
        </p>
      ) : (
        <p className="mb-4">
          <b>{country.name.common}</b> is not a landlocked country
        </p>
      )}
    </div>
  );
}

export default CountryCard;
