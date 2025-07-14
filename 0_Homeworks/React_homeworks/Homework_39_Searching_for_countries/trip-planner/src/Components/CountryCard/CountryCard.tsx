import "./CountryCard.css";

interface CountryCardProps {
  image: string;
  title: string;
  description: string;
}

function CountryCard({ image, title, description }: CountryCardProps) {
  return (
    <div className="CountryCard">
      <img src={image} alt={title} />

      <div className="CountryCard__content">
        <p className="CountryCard__title">{title}</p>
        <p className="CountryCard__description">{description}</p>
      </div>
    </div>
  );
}

export default CountryCard;
