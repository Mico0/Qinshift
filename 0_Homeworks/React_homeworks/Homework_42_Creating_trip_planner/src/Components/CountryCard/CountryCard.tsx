import Button from "../Button/Button";
import "./CountryCard.css";

interface CountryCardProps {
  image: string;
  title: string;
  capital: string[];
  area: number;
  population: number;
  landlocked: boolean;
  className: string;
}

function CountryCard({
  image,
  title,
  capital,
  area,
  population,
  landlocked,
  className,
}: CountryCardProps) {
  return (
    <div className={className}>
      <img src={image} alt="" />
      <h2>
        <b>{title}</b>
      </h2>
      <p>
        <b>Capital:</b> {capital}{" "}
      </p>
      <p>
        <b>Area:</b> {area} km<sup>2</sup>
      </p>
      <p>
        <b>Population:</b> {population}
      </p>

      {landlocked ? (
        <p className="mb-4">
          <b>{title}</b> is a landlocked country
        </p>
      ) : (
        <p className="mb-4">
          <b>{title}</b> is not a landlocked country
        </p>
      )}
      <Button icon="add">Add to trip planner</Button>
    </div>
  );
}

export default CountryCard;
