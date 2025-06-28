import "./CountryCard.css";

interface CountryCardProps {
  image: string;
  title: string;
  description: string;
}

function CountryCard({ image, title, description }: CountryCardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default CountryCard;
